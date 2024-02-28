This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```