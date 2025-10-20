import { Router } from "express";
import { CobrancaController as Controller } from "../Controller/Cobranca.Controller";
import { AutenticacaoMiddleware } from "../MiddleWare/Autenticaao.Middleware";

const router = Router();

// Criar
router.post(`/`, /*AutenticacaoMiddleware,*/   Controller.create);

// Atualizar (com ID na rota)
router.put(`/:id`, /*AutenticacaoMiddleware,*/   Controller.update);

// Buscar por ID
router.get(`/por-id/:id`, /*AutenticacaoMiddleware,*/   Controller.getById);

// Listar todos
router.get(`/por-id-entidade/:id_entidade`, /*AutenticacaoMiddleware,*/   Controller.getByIdEntidade);

// Listar todos
router.get(`/completo/por-id-entidade/:id_entidade/:periodo`, /*AutenticacaoMiddleware,*/   Controller.getCompletaByIdEntidadePeriodo);


// Deletar
router.delete(`/:id`, /*AutenticacaoMiddleware,*/   Controller.delete);

export { router };
