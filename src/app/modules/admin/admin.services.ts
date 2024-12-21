import { Blog } from '../blog/blog.model';
import { User } from '../user/user.model';

/**
 * @Desc User Block By Admin
 * @Params ""
 * @Method PATCH
 * @Return Data
 */
const blockUser = async (userId: string) => {
  const result = await User.findByIdAndUpdate(userId, { isBlocked: true });
  return result;
};

/**
 * @Desc Delete Blog By Admin
 * @Params ""
 * @Method DELETE
 * @Return Data
 */
const deleteBlog = async (blogId: string) => {
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
};
export const AdminServices = {
  blockUser,
  deleteBlog,
};
