import { getCustomRepository } from "typeorm";
import { Cobranca } from "../Entities/Cobranca";
import { CobrancaRepository } from "../Repository/Cobranca.Repository";

export class CobrancaService {

  // Criar registro
  static async create(params: Cobranca) {
    const repository = getCustomRepository(CobrancaRepository);

    try {
      const data = repository.create(params);
      await repository.save(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // Atualizar registro
  static async update(id: number, params: Partial<Cobranca>) {
    const repository = getCustomRepository(CobrancaRepository);

    try {
      const operation = await repository
        .createQueryBuilder()
        .update(Cobranca)
        .set(params)
        .where("ID = :id", { id })
        .execute();

      return operation;
    } catch (error) {
      throw error;
    }
  }

  // Buscar por ID
  static async getById(id: number) {
    const repository = getCustomRepository(CobrancaRepository);
    try {
      return await repository.findOne({ where: { ID: id } });
    } catch (error) {
      throw error;
    }
  }

  // Buscar por ID_ENTIDADE
  static async getByIdEntidade(id_entidade: number) {
    const repository = getCustomRepository(CobrancaRepository);
    try {
      // Retorna todas as cobranças para uma entidade
      return await repository.find({ where: { idEntidade: id_entidade } });
    } catch (error) {
      throw error;
    }
  }

  // Deletar por ID
  static async delete(id: number) {
    const repository = getCustomRepository(CobrancaRepository);

    try {
      const del = await repository
        .createQueryBuilder()
        .delete()
        .from(Cobranca)
        .where("ID = :id", { id })
        .execute();

      return del;
    } catch (error) {
      throw error;
    }
  }

  static async getCompletaByIdEntidadePeriodo(id_entidade: number, periodo: string) {
    console.log(id_entidade, periodo);
    const repository = getCustomRepository(CobrancaRepository);

    const sql = `
  SELECT
  JSON_OBJECT(
    'conta', JSON_OBJECT(
      'id', c.id,
      'id_cadastro_unico', c.id_cadastro_unico,
      'tipo_consumidor', c.tipo_consumidor,
      'data_criacao', DATE_FORMAT(c.data_criacao, '%Y-%m-%dT%H:%i:%s'),
      'data_baixa', IFNULL(DATE_FORMAT(c.data_baixa, '%Y-%m-%dT%H:%i:%s'), NULL),
      'motivo_suspensao', c.motivo_suspensao,
      'tipo_ligacao', c.tipo_ligacao,
      'situacao', c.situacao,
      'conta_original', c.conta_original,
      'origem', c.origem,
      'email', c.email,
      'celular', c.celular,
      'numero_relogio', c.numero_relogio,
      'primeira_leitura', c.primeira_leitura,
      'id_bairro', c.id_bairro,
      'id_unidade', c.id_unidade,
      'id_rua', c.id_rua,
      'cep', c.cep,
      'numero', c.numero,
      'complemento', c.complemento,
      'quadra', c.quadra,
      'lote', c.lote,
      'id_rota_leitura', c.id_rota_leitura,
      'ordem_leitura', c.ordem_leitura,
      'conta_grupo', c.conta_grupo,
      'id_entidade', c.id_entidade
    ),
    'cadastro_unico', IF(cu.id IS NULL, NULL, JSON_OBJECT(
      'id', cu.id,
      'codigo_unico', cu.codigo_unico,
      'descricao', cu.descricao,
      'cpf', cu.cpf,
      'cnpj', cu.cnpj
    )),
    'bairro', IF(b.id IS NULL, NULL, JSON_OBJECT('id', b.id, 'nome', b.nome)),
    'rota_leitura', IF(rl.id IS NULL, NULL, JSON_OBJECT('id', rl.id, 'nome', rl.nome)),
    'rua', IF(r.id IS NULL, NULL, JSON_OBJECT('id', r.id, 'nome', r.nome)),
    'unidade', IF(u.id IS NULL, NULL, JSON_OBJECT('id', u.id, 'nome', u.nome)),

    /* <<< última leitura da conta (sempre retorna objeto) >>> */
    'leitura', IFNULL(
      (
        SELECT JSON_OBJECT(
          'id', l.id,
          'id_conta', l.id_conta,
          'id_usuario', l.id_usuario,
          'leitura_anterior', l.leitura_anterior,
          'leitura_atual', l.leitura_atual,
          'data_criacao', DATE_FORMAT(l.data_criacao, '%Y-%m-%dT%H:%i:%s'),
          'id_entidade', l.id_entidade
        )
        FROM leitura l
        WHERE l.id_conta = c.id
          AND l.id_entidade = c.id_entidade
        ORDER BY l.data_criacao DESC, l.id DESC
        LIMIT 1
      ),
      /* objeto default quando não há leitura */
      JSON_OBJECT(
        'id', NULL,
        'id_conta', c.id,
        'id_usuario', NULL,
        'leitura_anterior', NULL,
        'leitura_atual', NULL,
        'data_criacao', NULL,
        'id_entidade', c.id_entidade
      )
    ),

    'cobranca', JSON_OBJECT(
      'id', cb.ID,
      'periodo', cb.PERIODO,
      'taxa_decimal', cb.TAXA_DECIMAL,
      'cpf_informante', cb.CPF_INFORMANTE,
      'data_informacao', DATE_FORMAT(cb.data_informacao, '%Y-%m-%dT%H:%i:%s'),
      'chave_desktop', cb.CHAVE_DESKTOP,
      'chave_web', cb.CHAVE_WEB,
      'tipo', cb.TIPO,
      'codigo_unico_fornecedor', cb.CODIGO_UNICO_FORNECEDOR,
      'computada', cb.COMPUTADA,
      'cancelada', cb.CANCELADA,
      'vencimento', DATE_FORMAT(cb.VENCIMENTO, '%Y-%m-%d'),
      'codbarra', cb.CODBARRA,
      'registro', cb.REGISTRO,
      'data_baixa', IFNULL(DATE_FORMAT(cb.DATA_BAIXA, '%Y-%m-%d'), NULL),
      'id_entidade', cb.ID_ENTIDADE,
      'descricao', cb.descricao
    )
  ) AS json
FROM CONTA c
LEFT JOIN CADASTRO_UNICO cu ON cu.id = c.id_cadastro_unico
LEFT JOIN bairro b          ON b.id  = c.id_bairro
LEFT JOIN rota_leitura rl   ON rl.id = c.id_rota_leitura
LEFT JOIN rua r             ON r.id  = c.id_rua
LEFT JOIN unidade u         ON u.id  = c.id_unidade
/* cobrança do PERÍODO para o mesmo fornecedor/entidade */
LEFT JOIN (
  SELECT MAX(ID) AS ID, CODIGO_UNICO_FORNECEDOR
  FROM COBRANCA
  WHERE PERIODO = ?
    AND ID_ENTIDADE = ?
  GROUP BY CODIGO_UNICO_FORNECEDOR
) cbx ON cbx.CODIGO_UNICO_FORNECEDOR = cu.codigo_unico
LEFT JOIN COBRANCA cb ON cb.ID = cbx.ID
WHERE c.id_entidade = ?
ORDER BY c.id_rota_leitura, c.ordem_leitura, c.id;

`;


    const rows = await repository.query(sql, [periodo, id_entidade, id_entidade]);

    return rows.map((r: any) => {
      const v = r.json;
      if (typeof v === "string") return JSON.parse(v);
      if (Buffer.isBuffer(v)) return JSON.parse(v.toString("utf8"));
      return v;
    });
  }

}