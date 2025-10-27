# Credit Jambo Platform

This is the Client Application for the Credit Jambo Digital Credit & Savings Platform, built with Next.js and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Overview

This application serves as the customer-facing interface for the Credit Jambo financial system. It allows users to:
- Register and log in securely.
- Manage their personal profile.
- View savings balances, make deposits, and withdrawals.
- Check their credit score, usage, and request new credit lines.
- View a comprehensive history of all their transactions.

## Technologies Used

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Forms**: React Hook Form with Zod for validation
- **Icons**: Lucide React
- **Charts**: Recharts

## Architecture

This frontend is designed to consume a separate backend API, following the architecture guidelines specified in the project requirements. It features:
- A clear separation of pages and reusable components.
- Mock data and services to simulate backend interactions (`/src/lib/data.ts`).
- A secure-by-design dashboard layout for authenticated users.

The UI is designed to be modern, professional, and accessible, with a color scheme reflecting trust and stability.
