import { Request, Response } from "express";
import { Conta } from "../Entities/Conta";
import { create, del, update } from "../UseCases/Conta";
import { getById, getByIdEntidade, getByIdEntidadeListaCompleta } from "../UseCases/Conta/get";

export class ContaController {

    static async create(req: Request, res: Response) {
        try {
            // Atribui o id_entidade do usuário logado
            
            console.log(req.body)
            const data = await create(req.body as Conta);
            return res.status(201).json(data);
        } catch (e: any) {
            console.log(e)
            return res.status(400).json({ message: e.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            console.log(req.body)
            const data = await update(id, req.body);
            return res.status(200).json(data);
        } catch (e: any) {
            console.log(e)
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
            console.log(e)
            return res.status(400).json({ message: e.message });
        }
    }

    static async getByIdEntidade(req: Request, res: Response) {
        try {
            const id_entidade = Number(req.usuario?.entidade?.id);
            const data = await getByIdEntidade(id_entidade);
            return res.status(200).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }

    static async getByIdEntidadeListaCompleta(req: Request, res: Response) {
        try {
            const id_entidade = Number(req.usuario?.entidade?.id);
            const data = await getByIdEntidadeListaCompleta(id_entidade);
            return res.status(200).json(data);
        } catch (e: any) {
            console.log(e)
            return res.status(400).json({ message: e.message });
        }
    }
}
