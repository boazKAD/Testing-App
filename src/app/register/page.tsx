import { RegisterForm } from '@/components/auth/register-form';
import { Logo } from '@/components/icons';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/">
            <Logo className="h-20 w-20 text-primary" />
          </Link>
          <h1 className="mt-4 text-3xl font-headline font-bold tracking-tight text-foreground">
            Create an Account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Join Credit Jambo today and take control of your finances.
          </p>
        </div>
        <RegisterForm />
      </div>
       <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Credit Jambo Ltd. All rights reserved.
      </footer>
    </div>
  );
}
