import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./Database/connect";
import { router as usuario_routes } from "./Routes/Usuario.routes";


const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/usuario", usuario_routes);

app.listen(3333, () => console.log("Server started at http://localhost:3333"));