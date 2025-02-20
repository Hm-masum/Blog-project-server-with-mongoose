import { JwtPayload } from 'jsonwebtoken';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { BlogSearchableFields } from './blog.constant';

const createBlogIntoDB = async (payload: TBlog, user: JwtPayload) => {
  const blogData = { ...payload, author: user?._id };

  const result = (await Blog.create(blogData)).populate('author');
  return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(BlogSearchableFields)
    .filter()
    .sort();

  const result = await blogQuery.modelQuery;
  return result;
};

const updateBlogFromDB = async (
  id: string,
  payload: Partial<TBlog>,
  user: JwtPayload,
) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
  }

  if (isBlogExist?.author != user?._id) {
    throw new AppError(httpStatus.BAD_REQUEST, 'It is not your blog');
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBlogIntoDB = async (id: string, user: JwtPayload) => {
  const isBlogExist = await Blog.findById(id);
  if (!isBlogExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
  }

  if (isBlogExist?.author != user?._id) {
    throw new AppError(httpStatus.BAD_REQUEST, 'It is not your blog');
  }

  const result = await Blog.findByIdAndDelete(id, { new: true });
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  updateBlogFromDB,
  deleteBlogIntoDB,
};
