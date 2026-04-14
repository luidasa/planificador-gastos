export type Expense = {
    id: string;
    name: string;
    amount: number;
    date: Date;
    category: string;
}

export type DraftExpense = Omit<Expense, 'id'>;

export type Category = {
    id: string;
    name: string;
    icon: string;
}
