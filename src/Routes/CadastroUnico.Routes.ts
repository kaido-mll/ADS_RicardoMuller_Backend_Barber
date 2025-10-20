import { Router } from "express";
import { CadastroUnicoController as Controller } from "../Controller/CadastroUnico.Controller";
import { AutenticacaoMiddleware } from "../MiddleWare/Autenticaao.Middleware";

const router = Router();

router.post(`/`, /*AutenticacaoMiddleware,*/  Controller.create);
router.put(`/:id`, /*AutenticacaoMiddleware,*/  Controller.update);
router.get(`/por-id/:id`, /*AutenticacaoMiddleware,*/  Controller.getById);
router.get(`/por-id-entidade/:id_entidade`, /*AutenticacaoMiddleware,*/  Controller.getByIdEntidade);
router.delete(`/:id`, /*AutenticacaoMiddleware,*/  Controller.delete);



export { router };