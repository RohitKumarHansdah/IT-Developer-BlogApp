import mongoose from 'mongoose';

const Connection = async () => {
  try {
    console.log('Connecting to MongoDB with URI:', process.env.MONGODB_URI?.substring(0, 50) + '...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting to the database ', error.message);
    process.exit(1);
  }
};

export default Connection;
