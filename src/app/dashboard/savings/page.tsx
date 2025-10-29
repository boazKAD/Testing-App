"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { savings, transactions } from "@/lib/data";
import { Landmark, ArrowDownToLine, ArrowUpFromLine, Loader2 } from "lucide-react";
import { TransactionTable } from "@/components/transaction-table";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const savingsActionSchema = z.object({
  amount: z.coerce.number().positive({ message: 'Please enter a positive amount.' }),
});

type SavingsActionType = 'deposit' | 'withdraw';

export default function SavingsPage() {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState<{ open: boolean; type: SavingsActionType | null }>({ open: false, type: null });

  const savingsTransactions = transactions.filter(
    (t) => t.type === 'deposit' || t.type === 'withdrawal'
  );

  const form = useForm<z.infer<typeof savingsActionSchema>>({
    resolver: zodResolver(savingsActionSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const { formState: { isSubmitting } } = form;

  function onSubmit(values: z.infer<typeof savingsActionSchema>) {
    console.log({ ...values, type: dialogOpen.type });
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        toast({
          title: `${dialogOpen.type === 'deposit' ? 'Deposit' : 'Withdrawal'} Successful`,
          description: `Your transaction has been processed.`,
        });
        setDialogOpen({ open: false, type: null });
        form.reset();
        resolve(null);
      }, 1500);
    });
  }

  const openDialog = (type: SavingsActionType) => {
    form.reset();
    setDialogOpen({ open: true, type });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-headline">Savings Account</CardTitle>
            <CardDescription>Deposit, withdraw, and track your savings.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => openDialog('deposit')}><ArrowDownToLine className="mr-2 h-4 w-4" />Deposit</Button>
            <Button onClick={() => openDialog('withdraw')} variant="secondary"><ArrowUpFromLine className="mr-2 h-4 w-4" />Withdraw</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold tracking-tight">
              ${savings.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Landmark className="h-4 w-4" />
              <span>Annual Percentage Yield: {savings.apy}%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={dialogOpen.open} onOpenChange={(open) => setDialogOpen({ open, type: dialogOpen.type })}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Make a {dialogOpen.type === 'deposit' ? 'Deposit' : 'Withdrawal'}</DialogTitle>
            <DialogDescription>
              Enter the amount you'd like to {dialogOpen.type}.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="$100.00" {...field} />
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
                  Confirm {dialogOpen.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      <Card>
        <CardHeader>
          <CardTitle>Savings History</CardTitle>
          <CardDescription>A log of your deposits and withdrawals.</CardDescription>
        </CardHeader>
        <CardContent>
            <TransactionTable transactions={savingsTransactions} />
        </CardContent>
      </Card>
    </div>
  );
}
