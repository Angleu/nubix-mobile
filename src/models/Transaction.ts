export type TransactionType = {
  id_transaction: string;
  amount: number;
  coin: string;
  description: string;
  id_accountTo: string;
  IBANF: string;
  type: 'send' | 'receive';
  created_at: string;
};
