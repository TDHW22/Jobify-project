import mongoose from "mongoose";

//creating a connection to mongoose database
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });
};
export default connectDB;
