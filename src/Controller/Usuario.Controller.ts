import { Request, Response } from "express";
import { Usuario } from "../Entities/Usuario";
import { create, del, update } from "../UseCases/Usuario";
import { getById, getCpfNome } from "../UseCases/Usuario/get";


export class UsuarioController {
    
    static async create(req: Request, res: Response) {
        try {
           //req.body.id_entidade = req.usuario?.entidade?.id ;
            const data = await create(req.body as Usuario);
            return res.status(201).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            //req.body.id_entidade = req.usuario?.entidade?.id ;
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

    static async getCpfNome(req: Request, res: Response) {
        try {
            const nome = req.params.nome;
            const cpf = req.params.cpf;
            const data = await getCpfNome(nome, cpf);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}
