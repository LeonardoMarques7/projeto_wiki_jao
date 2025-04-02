import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sobe dois níveis para sair de "back-end" e chegar em "Projeto_FullStack"
const rootDir = path.resolve(__dirname, "..", ".."); 

console.log("Diretório raiz:", rootDir); // Deve mostrar ".../Projeto_FullStack"

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/albuns", async (request, response) => {
  response.send(await db.collection("albuns").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.get("/api/shows", async (request, response) => {
  response.send(await db.collection("shows").find({}).toArray());
});

// Corrigindo caminho para apontar corretamente para "front-end/dist"
app.use(express.static(path.join(rootDir, "front-end/")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(rootDir, "front-end/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
