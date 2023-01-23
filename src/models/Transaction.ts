export type TransactionType = {
  amount: number;
  coin: string;
  data_transaction: string;
  description: string;
  id_transaction: string;
  reference: string;
  type: 'send' | 'receive' | 'deposit';
  user_destine: {
    name: string;
    telephone: string;
    avatar: string;
  };
};
