import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";


const BudgetForm = () => {

    const [budget, setBudget] = useState(0);

    const { dispatch } = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber);
        //console.log(budget);
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para guardar el presupuesto
        console.log("Presupuesto guardado:", budget);
        dispatch({ type: 'add-budget', payload: { budget } });
    }


    const isValid = useMemo(() => {
        return !isNaN(budget) && budget > 0 ;
    }, [budget]);

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
          Definir presupuesto 
        </label>
        <input
          type="number"
          id="budget"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}/>
      </div>
      <button   
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white font-black uppercase py-3 disabled:opacity-40 disabled:cursor-not-allowed"
        disabled={!isValid}>
        Guardar Presupuesto
      </button>
    </form>
  )
}

export default BudgetForm