"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Transaction } from "@/lib/data";
import { cn } from "@/lib/utils";

type TransactionTableProps = {
  transactions: Transaction[];
};

const statusVariantMap: { [key in Transaction['status']]: "default" | "secondary" | "destructive" } = {
  completed: "default",
  pending: "secondary",
  failed: "destructive",
};

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="hidden md:table-cell">{new Date(transaction.date).toLocaleDateString()}</TableCell>
            <TableCell>
              <div className="font-medium">{transaction.description}</div>
              <div className="text-sm text-muted-foreground md:hidden">{new Date(transaction.date).toLocaleDateString()}</div>
            </TableCell>
            <TableCell>
                <Badge variant="outline" className="capitalize">{transaction.type}</Badge>
            </TableCell>
            <TableCell>
              <Badge variant={statusVariantMap[transaction.status]} className="capitalize">
                {transaction.status}
              </Badge>
            </TableCell>
            <TableCell
              className={cn(
                "text-right font-medium",
                transaction.amount > 0 ? "text-green-600 dark:text-green-500" : "text-foreground"
              )}
            >
              {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
