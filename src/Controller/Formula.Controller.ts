import { Request, Response } from "express";
import { Formula } from "../Entities/Formula";
import { create, del, update } from "../UseCases/Formula";
import { getById, getByIdEntidade, getByIdUsuario } from "../UseCases/Formula/get";

export class FormulaController {

    static async create(req: Request, res: Response) {
        try {
           
            const data = await create(req.body as Formula);
            return res.status(201).json(data);
        } catch (e) {
            console.log(e)
            return res.status(400).json(e);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
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
            const id_entidade = Number(req.params.id_entidade) || req.usuario?.entidade?.id;
            const data = await getByIdEntidade(id_entidade);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }

    static async getByIdUsuario(req: Request, res: Response) {
        try {
            const id_usuario = Number(req.params.id_usuario) || req.usuario?.id;
            const data = await getByIdUsuario(id_usuario);
            return res.status(200).json(data);
        } catch (e) {
            return res.status(400).json(e);
        }
    }
}
