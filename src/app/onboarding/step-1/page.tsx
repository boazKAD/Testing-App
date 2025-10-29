"use client";

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  savingsGoal: z.coerce.number().positive({ message: 'Please enter a valid savings goal.' }),
});

export default function OnboardingStep1() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      savingsGoal: 1000,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    // Simulate API call to save goal
    setTimeout(() => {
      setIsLoading(false);
      router.push('/onboarding/step-2');
    }, 1000);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Set a Savings Goal</CardTitle>
        <CardDescription>What's the first big goal you're saving for? This will help us tailor your experience.</CardDescription>
        <Progress value={50} className="w-full mt-2" />
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="savingsGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>My Goal Amount</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="$1,000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Next Step
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
