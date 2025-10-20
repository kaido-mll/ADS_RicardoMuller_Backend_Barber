import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../Utils/Key";



export function AutenticacaoMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { authorization } = req.headers;

    if (!authorization) {
        // console.log("Errado");
        return res.sendStatus(401);
    }

    const token = authorization.replace("Bearer", "").trim();

    try {
        const data = jwt.verify(token, SECRET);
       
        const u = data as UsuarioCompleto;
        req.usuario = u.usuario;

        //se nao tem aplicação ainda dexiar comentado
        const permissao = u.usuario.sistemas.filter(i => i.titulo == "Cobrança de Água Municipal")
        // console.log(permissao)
        if (permissao.length == 0) {
            return res.status(404).json({ mensagem: "Você não possui permisão para acessar este aplicativo!" });
        }

        return next();

    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}


export interface UsuarioCompleto {
    usuario: {
        usuario: Usuario;
        entidade: Entidade;
        sistemas: any[];
    }


}


export interface Usuario {
    id: number;
    entidade_id: number;
    usuario: string;
    senha: string;
    email: string;
    inativo: Date;
    nome: string;
    foto: string;

}


export interface Entidade {
    id: number;


    titulo: string;


    banco: string;


    logo: string;


    apresentacao: string;


    portal: string;


    site: string;


    site2: string;


    pasta: string | null;
}