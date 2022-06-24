// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import data from '@cache/articles/data.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const article = data.filter((ev) => ev.pathname === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(article);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
