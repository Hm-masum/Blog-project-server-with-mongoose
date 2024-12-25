import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Blog } from '../blog/blog.model';
import { User } from '../user/user.model';

const blockUserIntoDB = async (id: string) => {
  const existingUser = await User.findById(id);
  if (!existingUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found');
  }

  const result = await User.findByIdAndUpdate(id, { isBlocked: true });
  return result;
};

const deleteBlogIntoDB = async (id: string) => {
  const existingBlog = await Blog.findById(id);
  if (!existingBlog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
  }

  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const AdminService = {
  blockUserIntoDB,
  deleteBlogIntoDB,
};
