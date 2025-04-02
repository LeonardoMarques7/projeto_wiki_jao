import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware - Uma função que trata as informações recebidas

app.use(express.json());

const connetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Deu erro ao conectar com o MongoDB", error);
  }
};


connetDB();


app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));