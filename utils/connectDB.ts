import mongoose from "mongoose";

async function connectDb() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false); // Removing the error

  mongoose.connect(process.env.MONGODB_URI!);
}

export default connectDb;
