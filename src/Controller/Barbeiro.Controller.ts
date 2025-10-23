import { Request, Response } from "express";
import { Barbeiro } from "../Entities/Barbeiro";
import { create, del, update } from "../UseCases/Barbeiro";
import { getById, getCpf } from "../UseCases/Barbeiro/get";


export class BarbeiroController {
    
    static async create(req: Request, res: Response) {
        try {
           //req.body.id_entidade = req.Barbeiro?.entidade?.id ;
            const data = await create(req.body as Barbeiro);
            return res.status(201).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            //req.body.id_entidade = req.Barbeiro?.entidade?.id ;
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

    static async getCpf(req: Request, res: Response) {
        try {
            const cpf = req.params.cpf;
            const data = await getCpf( cpf);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}
