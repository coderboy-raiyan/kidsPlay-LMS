import { compare, hash } from "bcryptjs";
import { Model, model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
    },
    email: {
      type: String,
      required: [true, "Invalid email address!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter a strong password!"],
      minlength: [6, "Password must be at least 6 characters!"],
      select: false,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    courses: [
      {
        courseId: String,
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await compare(enteredPassword, this.password);
};

const User: Model<IUser> = model("User", userSchema);

export default User;
