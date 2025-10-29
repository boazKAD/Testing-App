"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function OnboardingStep2() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = () => {
    setIsLoading(true);
    // Simulate final setup
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">You're All Set!</CardTitle>
        <CardDescription>Your account is ready. Let's start your financial journey.</CardDescription>
        <Progress value={100} className="w-full mt-2" />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center space-y-4 py-12">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <p className="text-lg font-medium">Your profile and savings goal have been set up.</p>
        <p className="text-muted-foreground">
          You can now explore your dashboard, manage your savings, and apply for credit.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleComplete} disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Go to Dashboard
        </Button>
      </CardFooter>
    </Card>
  );
}
