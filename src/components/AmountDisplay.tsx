import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    title: string;
    amount: number;
};

export default function AmountDisplay({ title, amount }: AmountDisplayProps) {
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {title}: 
            <span className="font-black text-black">{formatCurrency(amount)}</span>
        </p>
    )
}