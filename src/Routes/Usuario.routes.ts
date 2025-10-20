import { Router } from "express";
import { UsuarioController as Controller } from "../Controller/Usuario.Controller";
import { AutenticacaoMiddleware } from "../MiddleWare/Autenticaao.Middleware";

const router = Router();

// Criar
router.post(`/`, /*AutenticacaoMiddleware,*/  Controller.create);

// Atualizar (com ID na rota)
router.put(`/:id`, /*AutenticacaoMiddleware,*/   Controller.update);

// Buscar por ID
router.get(`/por-id/:id`, /*AutenticacaoMiddleware,*/   Controller.getById);

// Listar por nome
router.get(`/nome/:nome`, /*AutenticacaoMiddleware,*/   Controller.getCpfNome);

// Deletar
router.delete(`/:id`, /*AutenticacaoMiddleware,*/   Controller.delete);

export { router };
