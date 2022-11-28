import * as mongoose from "mongoose";

interface IUser extends mongoose.Document {
  email: String;
  password: String;
}

const User = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUser>("users", User);
