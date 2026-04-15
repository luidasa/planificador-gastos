import { categories } from "../models/data/categories";
import { useState } from "react";
import type { DraftExpense } from "../models/Expense";
import ErrorMessage from "./ErrorMessage";

export default function ExpenseForm() {

    const isValidForm = true;

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        date: new Date(),
        category: '',
        name: ""
    });

    const [error, setError] = useState('');

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (Object.values(expense).includes('') || expense.amount <= 0) {
            setError('Por favor, complete todos los campos del formulario');
            return;
        } else {             
            alert('Gasto añadido correctamente');
        }
    }

    return (
        <>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend 
                className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                Nuevo gastos
            </legend>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">
                    Nombre gasto: 
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añade el nombre del gasto"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                    value={expense.name}
                    onChange={(e) => setExpense({...expense, name: e.target.value})}
                    />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseAmount" className="text-xl">
                    Cantidad: 
                </label>
                <input
                    type="number"
                    id="expenseAmount"
                    placeholder="Añade la cantidad del gasto"
                    className="bg-slate-100 p-2"
                    name="expenseAmount"
                    value={expense.amount} 
                    onChange={(e) => setExpense({...expense, amount: Number(e.target.value)})}/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseDate" className="text-xl">
                    Fecha gasto: 
                </label>
                <input
                    type="date"
                    id="expenseDate"
                    className="bg-slate-100 p-2"                
                    name="expenseDate"
                    value={expense.date.toISOString().split('T')[0]}
                    onChange={(e) => setExpense({...expense, date: new Date(e.target.value)})}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="expenseCategory" className="text-xl">
                    Categoria: 
                </label>
                <select
                    id="expenseCategory"
                    className="bg-slate-100 p-2"
                    name="expenseCategory"
                    value={expense.category}
                    onChange={(e) => setExpense({...expense, category: e.target.value})}>
                        <option value="">-- Seleccione --</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className={`w-full p-3 text-white uppercase font-bold ${isValidForm ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!isValidForm}>
                Añadir gasto
            </button>
        </form>
        </>
    )
}