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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { credit, transactions } from "@/lib/data";
import { CreditCard, PlusCircle } from "lucide-react";
import { TransactionTable } from "@/components/transaction-table";

export default function CreditPage() {
  const creditUsagePercentage = (credit.used / credit.limit) * 100;
  const creditTransactions = transactions.filter(
    (t) => t.type === 'credit' || t.type === 'repayment'
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-headline">Credit Management</CardTitle>
            <CardDescription>View your credit status and request new credit.</CardDescription>
          </div>
          <Dialog>
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
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">Amount</Label>
                  <Input id="amount" placeholder="$1,000.00" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="reason" className="text-right pt-2">Reason</Label>
                  <Textarea id="reason" placeholder="e.g., For business expansion" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit Request</Button>
              </DialogFooter>
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
