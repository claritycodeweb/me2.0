import fsPromises from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { IArticle } from 'types/article';
import matter from 'gray-matter';

export async function getArticles() {
  const file = await fsPromises.readFile(
    path.join(process.cwd(), 'cache/articles/data.json')
  );

  const articles: IArticle[] = await JSON.parse(file.toString());

  return articles.sort((a, b) => b.date - a.date);
}

export async function getArticlesWithMd() {
  const files = fs.readdirSync(path.join(process.cwd(), 'cache/articles/md'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return paths;
}

export async function getArticleBySlug(slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'cache/articles/md', slug + '.md'),
    'utf-8'
  );

  const article = (await getArticles()).find((a) => a.pathname === slug);

  if (!article) {
    throw new Error('Not found');
  }

  const { content } = matter(markdownWithMeta);

  return {
    frontmatter: article,
    content,
  };
}
