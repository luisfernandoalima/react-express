import app from "./app";
import mongoose from "mongoose";

const PORT = 8081;

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1:27017/controlecliente")
  .then(() => {
    console.log("Conectado ao Mongo");
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao mongo: ${err}`);
  });

app.listen(PORT, () => console.log("Conectado ao Servidor!"));
