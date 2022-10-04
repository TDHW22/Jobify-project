//creating user schema
import mongoose from "mongoose";
//importing validator dependancy
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide an email"],
    minlength: 6,
  },
  lastName: {
    type: String,
    trim: true,
    default: "Last name",
    maxlength: 20,
  },
  location: {
    type: String,
    trim: true,
    default: "Location",
    maxlength: 20,
  },
});

export default mongoose.model("Users", UserSchema);
