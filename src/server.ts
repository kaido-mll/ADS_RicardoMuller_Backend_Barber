import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./Database/connect";
import { router as cadastro_unico_routes } from "./Routes/CadastroUnico.Routes";
import { router as bairro_routes } from "./Routes/Bairro.Routes";
import { router as unidade_routes } from "./Routes/Unidade.Routes";
import { router as rua_routes } from "./Routes/Rua.Routes";
import { router as rota_leitura_routes } from "./Routes/RotaLeitura.Routes";
import { router as conta_routes } from "./Routes/Conta.Routes";
import { router as cobranca_routes } from "./Routes/Cobranca.Routes";
import { router as formula_routes } from "./Routes/Formula.Routes";
import { router as vencimento_routes } from "./Routes/Vencimento.Routes";
import { router as leitura_routes } from "./Routes/Leitura.Routes";

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/cadastro-unico", cadastro_unico_routes);
app.use("/bairro", bairro_routes);
app.use("/unidade", unidade_routes);
app.use("/rua", rua_routes); 
app.use("/rota-leitura", rota_leitura_routes); 
app.use("/conta", conta_routes); 
app.use("/cobranca", cobranca_routes); 
app.use("/formula", formula_routes);
app.use("/vencimento", vencimento_routes);
app.use("/eitura", leitura_routes); 

app.listen(3333, () => console.log("Server started at http://localhost:3333"));