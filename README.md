# Menna Yasser — Portfolio

A recruiter-focused personal portfolio built with **Next.js App Router, React, TypeScript, Framer Motion, and Lucide icons**.

## Run locally

1. Install Node.js (LTS).
2. Extract this project and open its folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000`.

To create a production build:

```bash
npm run build
npm start
```

## Before publishing — personalize these items

Search the project for `YOUR_EMAIL` and replace it with the email address you want recruiters to use.

In `components/portfolio.tsx`:
- Confirm the project titles, descriptions, technologies, and GitHub URLs.
- Add the exact LinkedIn and Behance profile URLs.
- Add a CV PDF to `public/` and add a download link if you want your CV available directly from the website.
- Confirm the training dates and descriptions.
- Add project screenshots or live demo URLs when available.

The portfolio intentionally does not invent a phone number, email address, LinkedIn URL, Behance URL, or live project deployments.

## Deploy

You can deploy this Next.js project to Vercel:
1. Push the project to a GitHub repository.
2. Import that repository into Vercel.
3. Keep the default Next.js build settings and deploy.
4. Add your own domain if you have one.
