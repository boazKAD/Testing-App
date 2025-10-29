"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { credit, transactions } from "@/lib/data";
import { CreditCard, Loader2, PlusCircle } from "lucide-react";
import { TransactionTable } from "@/components/transaction-table";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const creditRequestSchema = z.object({
  amount: z.coerce.number().positive({ message: 'Please enter a valid amount.' }),
  reason: z.string().min(10, { message: 'Reason must be at least 10 characters long.' }),
});


export default function CreditPage() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const creditUsagePercentage = (credit.used / credit.limit) * 100;
  const creditTransactions = transactions.filter(
    (t) => t.type === 'credit' || t.type === 'repayment'
  );

  const form = useForm<z.infer<typeof creditRequestSchema>>({
    resolver: zodResolver(creditRequestSchema),
    defaultValues: {
      amount: 0,
      reason: '',
    },
  });

  const { formState: {isSubmitting} } = form;

  function onSubmit(values: z.infer<typeof creditRequestSchema>) {
    console.log(values);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        toast({
            title: "Request Submitted",
            description: "Your credit request has been submitted for review.",
        });
        setIsDialogOpen(false);
        form.reset();
        resolve(null);
      }, 1500);
    });
  }


  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-headline">Credit Management</CardTitle>
            <CardDescription>View your credit status and request new credit.</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button><PlusCircle className="mr-2 h-4 w-4" />Request Credit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Credit Request</DialogTitle>
                  <DialogDescription>
                    Fill out the details below to apply for new credit.
                  </DialogDescription>
                </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="$1,000.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g., For business expansion" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary" disabled={isSubmitting}>
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Submit Request
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                    <span className="text-muted-foreground">Used</span>
                    <span className="text-2xl font-bold tracking-tight">
                        ${credit.used.toLocaleString('en-US')}
                    </span>
                    <span className="text-muted-foreground">/ ${credit.limit.toLocaleString('en-US')}</span>
                </div>
                <Progress value={creditUsagePercentage} />
            </div>
            <div className="space-y-2 rounded-lg border p-4 text-center">
                <p className="text-sm text-muted-foreground">Your Credit Score</p>
                <p className="text-4xl font-bold text-primary">{credit.score}</p>
                <p className="text-sm font-medium">Good Standing</p>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Credit History</CardTitle>
          <CardDescription>A log of your credit usage and repayments.</CardDescription>
        </CardHeader>
        <CardContent>
            <TransactionTable transactions={creditTransactions} />
        </CardContent>
      </Card>
    </div>
  );
}
