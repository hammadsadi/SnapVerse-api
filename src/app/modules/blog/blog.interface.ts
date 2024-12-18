import { ObjectId } from 'mongoose';

// Blog Data Type
export type TBlog = {
  title: string;
  content: string;
  author: ObjectId;
  isPublished: boolean;
};
