export type BudgetActions = 
{ type: 'add-budget', payload: { budget: number } } | 
{ type: 'remove-budget', payload: { budget: number } };

export type BudgetState = {
    budget: number;
};

export const initialState: BudgetState = {
    auth: false,
    budget: 0,
};

export const budgetReducer = (state: BudgetState, action: BudgetActions): BudgetState => {
    switch (action.type) {
        case 'add-budget':
            return { ...state, budget: action.payload.budget };
        case 'remove-budget':
            return { ...state, budget: 0 };
        default:
            return state;
    }
};

