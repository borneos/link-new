This is a borneos-link apps Fullstack with NextJs with route pages | Prismaio | Mysql | NextAuth | ShadcnUI

## Getting Started

First, install all package:

```bash
npm run install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Third, for generate migration & push to DB:
```bash
yarn prisma studio
# for run prisma studio (preview table db from browser client, make sure your db already connected)
yarn prisma migrate dev
# for generate migrate you can see all migration on folder prisma->migrations
yarn prisma db push
# for pushing your migration to db server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result tada~~😉.

## Structure App
- pages (main (All Page View), api (Service & Controller))
- components (MainComponent.tsx, ui (generate from shadcn))
- constant
- helpers
- hooks
- libs
- prisma (DB Model Schema, Migration Generated)
- middleware
- public
- style

