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
}