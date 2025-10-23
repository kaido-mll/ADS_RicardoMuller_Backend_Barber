import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./Database/connect";
import { router as usuario_routes } from "./Routes/Usuario.routes";
import { router as barbearia_routes } from "./Routes/Barbearia.routes";
import { router as servico_routes } from "./Routes/Servico.routes";
import { router as barbeiro_routes } from "./Routes/Barbeiro.routes";
import { router as agendamento_routes } from "./Routes/Agendamento.routes";


const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/usuario", usuario_routes);
app.use("/barbearia", barbearia_routes);
app.use("/servico", servico_routes);
app.use("/barbeiro", barbeiro_routes);
app.use("/agendamento", agendamento_routes);

app.listen(3333, () => console.log("Server started at http://localhost:3333"));