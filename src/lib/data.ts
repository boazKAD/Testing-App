export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  joined: string;
  savingsGoal?: number;
};

export type Savings = {
  balance: number;
  apy: number;
};

export type Credit = {
  score: number;
  limit: number;
  used: number;
};

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'repayment' | 'credit';
  status: 'completed' | 'pending' | 'failed';
};

export const user: User = {
  id: 'usr_1',
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  joined: '2023-01-15',
  savingsGoal: 5000,
};

export const savings: Savings = {
  balance: 12540.75,
  apy: 3.5,
};

export const credit: Credit = {
  score: 750,
  limit: 5000,
  used: 1200,
};

export const transactions: Transaction[] = [
  {
    id: 'txn_1',
    date: '2024-07-22',
    description: 'Monthly Savings Deposit',
    amount: 500.0,
    type: 'deposit',
    status: 'completed',
  },
  {
    id: 'txn_2',
    date: '2024-07-20',
    description: 'Amazon.com Purchase',
    amount: -75.5,
    type: 'credit',
    status: 'completed',
  },
  {
    id: 'txn_3',
    date: '2024-07-18',
    description: 'ATM Withdrawal',
    amount: -100.0,
    type: 'withdrawal',
    status: 'completed',
  },
  {
    id: 'txn_4',
    date: '2024-07-15',
    description: 'Credit Repayment',
    amount: 250.0,
    type: 'repayment',
    status: 'completed',
  },
  {
    id: 'txn_5',
    date: '2024-07-10',
    description: 'Pending Deposit',
    amount: 1000.0,
    type: 'deposit',
    status: 'pending',
  },
    {
    id: 'txn_6',
    date: '2024-07-05',
    description: 'Failed transfer to ...',
    amount: -200.0,
    type: 'withdrawal',
    status: 'failed',
  },
];
