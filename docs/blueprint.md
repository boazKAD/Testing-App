# **App Name**: Credit Jambo Platform

## Core Features:

- User Authentication and Authorization: Secure user authentication with role-based access control (Admin, Customer) using JWT. Includes device or session tracking and refresh token strategy.
- Customer Profile Management: Registration, login, and profile management for customers.  Uses DTO's and Services for data abstraction.
- Savings Management: Allows customers to deposit and withdraw funds, and check their balance.
- Credit Request: Allows customers to request credit and simulates the approval and repayment logic.
- Admin Dashboard: Dashboard for admins to manage users, approve devices and credit requests, and monitor system metrics and transactions.
- Notification System: In-app and email notifications for various events, using a queue or mock background service.
- Transaction Analytics: Monitors user transactions.

## Style Guidelines:

- Primary color: Deep teal (#008080) to reflect trust, security, and financial stability.
- Background color: Light teal (#E0F8F8) for a clean and calming interface.
- Accent color: Mustard Yellow (#E1AD01) to highlight important actions and information.
- Font pairing: 'Poppins' (sans-serif) for headings, providing a geometric and contemporary feel, and 'PT Sans' (sans-serif) for body text, ensuring readability and a touch of warmth.
- Use clean and professional icons to represent different financial actions and data points.
- Prioritize clear, modular layouts with ample spacing for ease of navigation and a professional feel.
- Implement subtle transitions and animations to provide feedback on user actions.