import mongoose from 'mongoose';

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
