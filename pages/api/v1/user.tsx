import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/libs/db";
import { NextApiRequest, NextApiResponse } from "next";

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
      const user = { id: 1, name: 'John Doe' };
      res.status(200).json({ success: true, data: user });
      break;
    case 'POST':
      try {
        const body = await req.body;
        const { email, emailVerified, password, name } = body;
  
        const existingUserByEmail = await db.user.findUnique({
          where: { email: email}
        })
  
        if(existingUserByEmail){
          return res.status(500).json({ success: false, error: 'User with email already registered' }); 
        }

        const hashedPassword = await hash(password, 10)
        const newUser = await db.user.create({
          data: {
            name,
            email,
            email_verified: emailVerified ?? null,
            password: hashedPassword
          }
        });

        return res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ success: false, error: 'Failed to create user' });
      }
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