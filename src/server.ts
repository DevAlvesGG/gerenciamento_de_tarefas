import express from "express";
import { router } from "../routes";
import { error } from "node:console";
import { errorHandler } from "../middlewares/error-handler";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(errorHandler)

app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));