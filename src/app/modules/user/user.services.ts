import { TUser } from './user.interface';
import { User } from './user.model';

/**
 * @Desc User Save To DB
 * @Params ""
 * @Method POST
 * @Return Data
 */
const userSaveToDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return {
    _id: result._id,
    name: result.name,
    email: result.email,
  };
};

export const UserServices = {
  userSaveToDB,
};
