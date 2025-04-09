import mongoose, { mongo } from "mongoose";

async function conectaNaDataBase() {
  mongoose.connect(
    "mongodb+srv://guialves:witrwit1@cluster0.jzkpixt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}

export default conectaNaDataBase;
