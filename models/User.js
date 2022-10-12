//creating user schema
import mongoose from "mongoose";
//importing validator dependancy
import validator from "validator";
//importing bcryptjs for hashing passwords
import bcrypt from "bcryptjs";
//importing jsonwebtoken for jwt
import jwt from "jsonwebtoken";

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
    select: false,
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
    default: "my city",
    maxlength: 20,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePasswords = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("Users", UserSchema);
