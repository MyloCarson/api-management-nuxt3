export interface IAnalytic {
  day: string;
  number_of_transactions: number;
}

export interface ITransaction {
  customer_name: string;
  amount: number;
  reference: string;
  date: string;
  status: string;
}

export interface IBalance {
  coin: string;
  amount: number;
  human_readable_amount: number;
}

export interface IDashboard {
  balances: IBalance[];
  transactions: ITransaction[];
  banner: string;
  analytics: IAnalytic[];
}
