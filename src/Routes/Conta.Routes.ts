import { Router } from "express";
import { ContaController as Controller } from "../Controller/Conta.Controller";
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
router.get(`/por-id-entidade-lista-completa/:id_entidade`,  /*AutenticacaoMiddleware,*/   Controller.getByIdEntidadeListaCompleta);

// Deletar
router.delete(`/:id`, /*AutenticacaoMiddleware,*/   Controller.delete);

export { router };
