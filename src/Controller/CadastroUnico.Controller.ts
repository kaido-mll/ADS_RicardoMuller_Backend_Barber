import { Request, Response } from "express";
import { CadastroUnico } from "../Entities/CadastroUnico";
import { create, del, getById, getByIdEntidade, update } from "../UseCases/CadastroUnico";

export class CadastroUnicoController {

    static async create(req: Request, res: Response) {
        try {
            // req.body.id_entidade = req.usuario.entidade.id;
            const data = await create(req.body);
            return res.status(201).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    // ... (imports e outros métodos)

    static async update(req: Request, res: Response) {
        try {
            // 1. Capturar o ID da rota
            const id = Number(req.params.id);

            // 2. Passar o ID e o corpo da requisição para o use case
            const data = await update(id, req.body);

            return res.status(200).json(data);
        } catch (e) {
            console.log(e);
            return res.status(400).json(e);
        }
    }

    // ... (outros métodos)

    static async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = await del(id);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = await getById(id);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async getByIdEntidade(req: Request, res: Response) {
        try {
            const id_entidade = Number(req.params.id_entidade);
            const data = await getByIdEntidade(id_entidade);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}
