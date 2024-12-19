import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import { UserRole } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';
const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: UserRole,
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

// Hasing Password Using Pre Hooks
userSchema.pre('save', async function (next) {
  const userInfo = this;
  userInfo.password = await bcrypt.hash(
    userInfo.password,
    Number(config.BCRYPT_SOLT_ROUND),
  );
  next();
});

export const User = model<TUser>('User', userSchema);
