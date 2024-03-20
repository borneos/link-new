import { db } from '@/libs/db';
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import { compare } from 'bcrypt' 

export const authOptions: NextAuthOptions = {
  // your configs
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/auth/signin",
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      type: "credentials",
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@mail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const {email, password} = credentials as {
          email: string,
          password: string
        };

        if(!email || !password) {
          return null;
        }

        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email }
        });

        if(!existingUser) {
          return null;
        }

        const passwordMatch = await compare(password, existingUser.password)
        if(!passwordMatch){
          return null;
        }

        return {
          id: existingUser.id,
          email: existingUser.email,
          fullname: existingUser.name,
        }
        // const user:any = {
        //   id: 1,
        //   email: email,
        //   password: password,
        //   fullname: fullname
        // };
        // if(user){
        //   console.log("🚀 ~ authorize ~ user:", user)
        //   return user;
        // }else{
        //   return null
        // }
      }
    })
  ],
  callbacks: {
    jwt({token, account, profile, user}:any){
      if(account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
      }
      return token;
    },
    async session({session, token}: any){
      if("email" in token) {
        session.user.email = token.email;
      }
      if("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      return session;
    }
  }
}

export default NextAuth(authOptions);