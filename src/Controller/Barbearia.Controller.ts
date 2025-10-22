import { Request, Response } from "express";
import { Barbearia } from "../Entities/Barbearia";
import { create, del, update } from "../UseCases/Barbearia";
import { getById, getByCnpj } from "../UseCases/Barbearia/get";


export class BarbeariaController {
    
    static async create(req: Request, res: Response) {
        try {
           //req.body.id_entidade = req.Barbearia?.entidade?.id ;
            const data = await create(req.body as Barbearia);
            return res.status(201).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            //req.body.id_entidade = req.Barbearia?.entidade?.id ;
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

    static async getByCnpj(req: Request, res: Response) {
        try {
            const cnpj = req.params.cnpj;
            const data = await getByCnpj( cnpj);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}
