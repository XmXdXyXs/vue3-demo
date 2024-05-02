type Images = {
  url?: string;
  _id: string;
  createdAt?: string;
};
export interface ColumnProps {
  _id: string;
  title?: string;
  avatar?: Images;
  description?: string;
}
export interface PostProps {
  _id: string;
  title?: string;
  description?: string;
  avatar?: Images;
  author: string;
  createdAt: string;
  featured: boolean;
}

export interface ColumnPropsList {
  _id: string;
  title?: string;
  excerpt?: string;
  content?: string;
  image?: Images;
  key?: number;
  author?: {
    _id?: string;
    email?: string;
    nickName?: string;
    description?: string;
    avatar?: string;
    column?: string;
    createdAt: string;
  };
  column?: string;
  createdAt?: string;
}
