import { Request, Response } from "express";
import { Unidade } from "../Entities/Unidade";
import { create, del, update } from "../UseCases/Unidade";
import { getById, getByIdEntidade } from "../UseCases/Unidade/get";

export class UnidadeController {
    
    static async create(req: Request, res: Response) {
        try {
            //req.body.id_entidade = req.usuario?.entidade?.id || req.body.id_entidade;
            const data = await create(req.body as Unidade);
            return res.status(201).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            //req.body.id_entidade = req.usuario?.entidade?.id || req.body.id_entidade;
            const data = await update(id, req.body);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

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
