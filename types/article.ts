export interface IResource {
  name: string;
  link: string;
}

export interface IArticle {
  id: number;
  mainCategory: string;
  tags: string[];
  pathname: string;
  title: string;
  description: string;
  shortDesc: string;
  date: number;
  mainImage: string;
  author: string;
  resources: IResource[];
}
