import { Router } from "express";
import { AgendamentoController as Controller } from "../Controller/Agendamento.Controller";
import { AutenticacaoMiddleware } from "../MiddleWare/Autenticaao.Middleware";

const router = Router();

// Criar
router.post(`/`, /*AutenticacaoMiddleware,*/  Controller.create);

// Atualizar (com ID na rota)
router.put(`/:id`, /*AutenticacaoMiddleware,*/   Controller.update);

// Buscar por ID
router.get(`/por-id/:id`, /*AutenticacaoMiddleware,*/   Controller.getById);

// Deletar
router.delete(`/:id`, /*AutenticacaoMiddleware,*/   Controller.delete);

export { router };
