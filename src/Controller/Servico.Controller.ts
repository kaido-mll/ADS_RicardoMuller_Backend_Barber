import { Request, Response } from "express";
import { Servico } from "../Entities/Servico";
import { create, del, update } from "../UseCases/Servico";
import { getById } from "../UseCases/Servico/get";


export class ServicoController {
    
    static async create(req: Request, res: Response) {
        try {
           //req.body.id_entidade = req.Servico?.entidade?.id ;
            const data = await create(req.body as Servico);
            return res.status(201).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            //req.body.id_entidade = req.Servico?.entidade?.id ;
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

}
