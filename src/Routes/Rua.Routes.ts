import { Router } from "express";
import { RuaController as Controller } from "../Controller/Rua.Controller";
import { AutenticacaoMiddleware } from "../MiddleWare/Autenticaao.Middleware";

const router = Router();

// Criar
router.post(`/`, /*AutenticacaoMiddleware,*/   Controller.create);

// Atualizar (com ID na rota)
router.put(`/:id`, /*AutenticacaoMiddleware,*/   Controller.update);

// Buscar por ID
router.get(`/por-id/:id`, /*AutenticacaoMiddleware,*/   Controller.getById);

// Listar todos por entidade
router.get(`/por-id-entidade/:id_entidade`, /*AutenticacaoMiddleware,*/   Controller.getByIdEntidade);

// Deletar
router.delete(`/:id`, /*AutenticacaoMiddleware,*/   Controller.delete);

export { router };
