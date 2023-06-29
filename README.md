# Supabase

This web app was built with Nuxt 3. Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Create the .env file

```bash
cp .env.sample .env
```

Open the .env file and update the ```SUPABASE_KEY```

The Supabase public key can be found at https://supabase.com/dashboard/project/dyjmrswsrewafrohnfcv/settings/api

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.