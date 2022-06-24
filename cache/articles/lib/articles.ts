import fsPromises from 'fs/promises';
import path from 'path';
import { IArticle } from 'types/article';

export async function getArticles() {
  const file = await fsPromises.readFile(
    path.join(process.cwd(), 'cache/articles/data.json')
  );

  const articles: IArticle[] = await JSON.parse(file.toString());

  return articles;
}
