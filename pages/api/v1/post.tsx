import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/libs/db";

type Data = {
  status?: boolean;
  statusCode?: Number;
  data?: any;
  success?: boolean;
  error?: string;
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      try {
        // res.status(200).json({ success: true, data: posts });
        const posts = await db.post.findMany()
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ success: false, error: 'Failed to create user' });
      }
      break;
    case 'POST':
      break;
    case 'PUT':
      break;
    case 'DELETE': 
      break
    default:
      res.status(405).end();
      break;
  }
}