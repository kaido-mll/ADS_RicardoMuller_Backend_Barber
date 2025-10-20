import { Request, Response } from "express";
import { Cobranca } from "../Entities/Cobranca";
import { create, update, del } from "../UseCases/Cobranca";
import { getById, getByIdEntidade, getCompletaByIdEntidadePeriodo } from "../UseCases/Cobranca/get";

export class CobrancaController {

    static async create(req: Request, res: Response) {
        try {
            // Atribui o id_entidade do usuário logado
            //req.body.idEntidade = req.usuario?.entidade?.id || req.body.idEntidade;

            const data = await create(req.body as Cobranca);
            return res.status(201).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
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


    static async getCompletaByIdEntidadePeriodo(req: Request, res: Response) {
        try {
            const id_entidade = Number(req.params.id_entidade);
            const periodo = (req.params.periodo);
            const data = await getCompletaByIdEntidadePeriodo(id_entidade, periodo);
            return res.status(200).json(data);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }


}