import mongoose from 'mongoose';

const Connection = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }
    
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Error while connecting to database:', error.message);
    process.exit(1);
  }
};

export default Connection;
