import { Request, Response } from "express";
import { RotaLeitura } from "../Entities/RotaLeitura";
import { create, del, update } from "../UseCases/RotaLeitura";
import { getById, getByIdEntidade } from "../UseCases/RotaLeitura/get";

export class RotaLeituraController {
    
    static async create(req: Request, res: Response) {
        try {
            //req.body.id_entidade = req.usuario?.entidade?.id || req.body.id_entidade;
            const data = await create(req.body as RotaLeitura);
            return res.status(201).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            //req.body.id_entidade = req.usuario?.entidade?.id || req.body.id_entidade;
            const data = await update(id, req.body);
            return res.status(200).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = await del(id);
            return res.status(200).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = await getById(id);
            return res.status(200).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }

    static async getByIdEntidade(req: Request, res: Response) {
        try {
            const id_entidade = Number(req.params.id_entidade || req.usuario?.entidade?.id);
            const data = await getByIdEntidade(id_entidade);
            return res.status(200).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }
}
