import { Logo } from '@/components/icons';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />
      <div className="w-full max-w-lg space-y-8">
        <div className="flex flex-col items-center text-center">
            <Logo className="h-20 w-20 text-primary" />
          <h1 className="mt-4 text-3xl font-headline font-bold tracking-tight text-foreground">
            Welcome to Credit Jambo
          </h1>
          <p className="mt-2 text-muted-foreground">
            Let's get your financial journey started.
          </p>
        </div>
        {children}
      </div>
      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Credit Jambo Ltd. All rights reserved.
      </footer>
    </div>
  );
}
