import mongoose from "mongoose";

export const connecToDB = async  () => {
  const connection = {};
  try {
    if(connection.isConnected) return;
    let db = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
    connection.isConnected = db.connections[0].readyState
    return db ;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}