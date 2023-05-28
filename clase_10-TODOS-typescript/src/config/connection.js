import mongoose from 'mongoose';
export const connectToDB = async () => {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log('DB de mongo Conectada: ' + connection.connection.host);
};
