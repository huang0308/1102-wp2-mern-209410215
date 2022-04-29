import mongoose from 'mongoose';

const connectDB_15 = (url) => {
  return mongoose.connect(url);
}

export default connectDB_15;