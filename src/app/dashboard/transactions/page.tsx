import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { transactions } from "@/lib/data";
import { TransactionTable } from "@/components/transaction-table";

export default function TransactionsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">All Transactions</CardTitle>
        <CardDescription>A complete history of all your account activity.</CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionTable transactions={transactions} />
      </CardContent>
    </Card>
  );
}
