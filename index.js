import "dotenv/config";
import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';

const app = express();
///después sacar el puerto al .env
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", productsRouter);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});