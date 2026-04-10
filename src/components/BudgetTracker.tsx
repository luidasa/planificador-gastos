import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flax justify-center">
                <img src="/grafico.jpg" alt="Gráfico de presupuesto" />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
                    Resetear app
                </button>

                <AmountDisplay title="Presupuesto" amount={1000} />
                <AmountDisplay title="Disponible" amount={600} />
                <AmountDisplay title="Gastado" amount={400} />
            </div>
        </div>


    )
}  