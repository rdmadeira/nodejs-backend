import mongoose, { connect } from 'mongoose';

export const connectDB = async () => {
  console.log(process.env.DB_URL);
  const conn = await mongoose.connect(process.env.DB_URL); // sacar los warnings que tiene que usar estas cosas

  console.log(`MongoDB conectada: ${conn.connection.host}`);
};
