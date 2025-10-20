import { getCustomRepository } from "typeorm";
import { Conta } from "../Entities/Conta";
import { ContaRepository } from "../Repository/Conta.Repository";

export class ContaService {

  // Criar registro
  static async create(params: Conta) {
    const repository = getCustomRepository(ContaRepository);

    try {
      const data = repository.create(params);
      await repository.save(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // Atualizar registro
  static async update(id: number, params: Partial<Conta>) {
    const repository = getCustomRepository(ContaRepository);

    try {
      const operation = await repository
        .createQueryBuilder()
        .update(Conta)
        .set(params)
        .where("ID = :id", { id })
        .execute();

      return operation;
    } catch (error) {
      throw error;
    }
  }

  // Buscar por ID
  static async getById(id: number) /*: Promise<ContaCompleta | null>*/ {
    const repository = getCustomRepository(ContaRepository);

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
      'id', cu.id, 'codigo_unico', cu.codigo_unico, 'descricao', cu.descricao, 'cpf', cu.cpf, 'cnpj', cu.cnpj
    )),
    'bairro',       IF(b.id  IS NULL, NULL, JSON_OBJECT('id', b.id,  'nome', b.nome)),
    'rota_leitura', IF(rl.id IS NULL, NULL, JSON_OBJECT('id', rl.id, 'nome', rl.nome)),
    'rua',          IF(r.id  IS NULL, NULL, JSON_OBJECT('id', r.id,  'nome', r.nome)),
    'unidade',      IF(u.id  IS NULL, NULL, JSON_OBJECT('id', u.id,  'nome', u.nome)),

    'leituras', (
      SELECT IFNULL(
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', l.id,
            'id_conta', l.id_conta,
            'id_usuario', l.id_usuario,
            'leitura_anterior', l.leitura_anterior,
            'leitura_atual', l.leitura_atual,
            'data_criacao', DATE_FORMAT(l.data_criacao, '%Y-%m-%dT%H:%i:%s'),
            'id_entidade', l.id_entidade
          )
        ),
        JSON_ARRAY()
      )
      FROM (
        SELECT id, id_conta, id_usuario, leitura_anterior, leitura_atual, data_criacao, id_entidade
        FROM leitura
        WHERE id_conta = c.id
          AND id_entidade = c.id_entidade
        ORDER BY data_criacao DESC
        LIMIT 5
      ) AS l
    )
  ) AS json
FROM conta c
LEFT JOIN cadastro_unico cu ON cu.id = c.id_cadastro_unico
LEFT JOIN bairro b          ON b.id  = c.id_bairro
LEFT JOIN rota_leitura rl   ON rl.id = c.id_rota_leitura
LEFT JOIN rua r             ON r.id  = c.id_rua
LEFT JOIN unidade u         ON u.id  = c.id_unidade
WHERE c.id = ?
LIMIT 1;


    `;

    const rows = await repository.query(sql, [id]);
    if (!rows?.length) return null;

    const v = rows[0]?.json;
    if (v == null) return null;
    if (typeof v === "string") {
      try { return JSON.parse(v); } catch { return v; }
    }
    if (Buffer.isBuffer(v)) {
      try { return JSON.parse(v.toString("utf8")); } catch { return v.toString("utf8"); }
    }
    return v; // já veio objeto JS
  }

  // Buscar por ID_ENTIDADE
  static async getByIdEntidade(id_entidade: number) {
    const repository = getCustomRepository(ContaRepository);
    try {
      // Retorna todas as contas para uma entidade
      return await repository.find({ where: { id_entidade } });
    } catch (error) {
      throw error;
    }
  }

  // Deletar por ID
  static async delete(id: number) {
    const repository = getCustomRepository(ContaRepository);

    try {
      const del = await repository
        .createQueryBuilder()
        .delete()
        .from(Conta)
        .where("ID = :id", { id })
        .execute();

      return del;
    } catch (error) {
      throw error;
    }
  }






  static async getByIdEntidadeListaCompleta(id_entidade: number) {
    const repository = getCustomRepository(ContaRepository);

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
          'bairro', IF(b.id IS NULL, NULL, JSON_OBJECT(
            'id', b.id,
            'nome', b.nome
          )),
          'rota_leitura', IF(rl.id IS NULL, NULL, JSON_OBJECT(
            'id', rl.id,
            'nome', rl.nome
          )),
          'rua', IF(r.id IS NULL, NULL, JSON_OBJECT(
            'id', r.id,
            'nome', r.nome
          )),
          'unidade', IF(u.id IS NULL, NULL, JSON_OBJECT(
            'id', u.id,
            'nome', u.nome
          ))
        ) AS json
      FROM CONTA c
      LEFT JOIN CADASTRO_UNICO cu ON cu.id = c.id_cadastro_unico
      LEFT JOIN bairro b          ON b.id  = c.id_bairro
      LEFT JOIN rota_leitura rl   ON rl.id = c.id_rota_leitura
      LEFT JOIN rua r             ON r.id  = c.id_rua
      LEFT JOIN unidade u         ON u.id  = c.id_unidade
      WHERE c.id_entidade = ?
      ORDER BY c.id_rota_leitura, c.ordem_leitura, c.id
    `;

    const rows = await repository.query(sql, [id_entidade]);
    return rows.map((r: any) => {
      const v = r.json;
      if (typeof v === "string") return JSON.parse(v);
      if (Buffer.isBuffer(v)) return JSON.parse(v.toString("utf8"));
      return v;
    });


  }
}


