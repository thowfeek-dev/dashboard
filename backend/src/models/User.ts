import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  role: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'member' }, 
});

const User = mongoose.model<IUser>('User', userSchema);

export { User, IUser };
