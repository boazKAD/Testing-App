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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { savings, transactions } from "@/lib/data";
import { Landmark, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { TransactionTable } from "@/components/transaction-table";

export default function SavingsPage() {
  const savingsTransactions = transactions.filter(
    (t) => t.type === 'deposit' || t.type === 'withdrawal'
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-headline">Savings Account</CardTitle>
            <CardDescription>Deposit, withdraw, and track your savings.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button><ArrowDownToLine className="mr-2 h-4 w-4" />Deposit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Make a Deposit</DialogTitle>
                  <DialogDescription>
                    Enter the amount you'd like to deposit into your savings account.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">Amount</Label>
                    <Input id="amount" defaultValue="$100.00" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Confirm Deposit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary"><ArrowUpFromLine className="mr-2 h-4 w-4" />Withdraw</Button>
              </DialogTrigger>
               <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Make a Withdrawal</DialogTitle>
                  <DialogDescription>
                    Enter the amount you'd like to withdraw from your savings.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">Amount</Label>
                    <Input id="amount" defaultValue="$50.00" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" variant="secondary">Confirm Withdrawal</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
