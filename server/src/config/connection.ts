import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI || '';
console.log(process.env);
const db = async (): Promise<typeof mongoose.connection> => {
  try {
    await mongoose.connect("mongodb+srv://vluu11:mypassword123@cluster0.vsdzq.mongodb.net/googlebooks?retryWrites=true&w=majority");
    console.log('Database connected.');
    return mongoose.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed.');
  }
};

export default db;
