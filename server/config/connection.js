import mongoose from "mongoose";

export async function connect() {
  console.log("Connecting to MongoDB");
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/telnyx-ping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
}

export default mongoose.connection;
