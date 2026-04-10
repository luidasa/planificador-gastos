import { useReducer, createContext, type Dispatch, type ReactNode } from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer";

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
};

type BudgetProviderProps = {
    children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

// Esto sirve para generar el contexto, es decir, el estado global de la aplicación
export const BudgetProvider= ({children}: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )
}
