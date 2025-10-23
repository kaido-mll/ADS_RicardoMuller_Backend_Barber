import { Router } from "express";
import { BarbeariaController as Controller } from "../Controller/Barbearia.Controller";
import { AutenticacaoMiddleware } from "../MiddleWare/Autenticaao.Middleware";

const router = Router();

// Criar
router.post(`/`, /*AutenticacaoMiddleware,*/  Controller.create);

// Atualizar (com ID na rota)
router.put(`/:id`, /*AutenticacaoMiddleware,*/   Controller.update);

// Buscar por ID
router.get(`/por-id/:id`, /*AutenticacaoMiddleware,*/   Controller.getById);

// Listar por nome
router.get(`/cnpj/:cnpj`, /*AutenticacaoMiddleware,*/   Controller.getByCnpj);

// Deletar
router.delete(`/:id`, /*AutenticacaoMiddleware,*/   Controller.delete);

export { router };
