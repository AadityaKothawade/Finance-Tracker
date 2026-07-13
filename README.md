# AI Finance Tracker

A personal finance management web application that helps users track their income and expenses, manage budgets, and view financial insights. The application also uses Google Gemini AI to generate spending summaries and suggestions.

Live : https://finance-tracker-pied-iota-72.vercel.app/

## Features

* User Authentication (Clerk)
* Add, Edit and Delete Transactions
* Income and Expense Tracking
* Budget Management
* Dashboard with Charts
* Email Notifications
* Responsive Design

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Shadcn UI
* Prisma
* Supabase (PostgreSQL)
* Clerk Authentication
* Google Gemini AI
* Arcjet

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/AI-Finance-Tracker.git
```

Go to the project folder

```bash
cd AI-Finance-Tracker
```

Install dependencies

```bash
npm install
```

Create a `.env` file and add your environment variables.

Run the project

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

## Environment Variables

```env
DATABASE_URL=

DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

GEMINI_API_KEY=

ARCJET_KEY=

RESEND_API_KEY=

EMAIL_FROM=

CLERK_WEBHOOK_SECRET=
```

## Folder Structure

```text
app/
components/
actions/
lib/
prisma/
public/
```

## Future Improvements

* Recurring Transactions
* Export Reports
* Multi-Currency Support
* Receipt Scanner

## Author

Aaditya Kothawade
