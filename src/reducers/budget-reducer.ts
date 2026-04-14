export type BudgetActions = 
{ type: 'add-budget', payload: { budget: number } } | 
{ type: 'remove-budget', payload: { budget: number } } |
{ type: 'show-modal' } |
{ type: 'close-modal' };

export type BudgetState = {
    budget: number
    modal: boolean
};

export const initialState: BudgetState = {
    budget: 0,
    modal: false
};

export const budgetReducer = (state: BudgetState, action: BudgetActions): BudgetState => {
    switch (action.type) {
        case 'add-budget':
            return { ...state, budget: action.payload.budget };
        case 'show-modal':
            return { ...state, modal: true };
        case 'close-modal':
            return { ...state, modal: false };
        case 'remove-budget':
            return { ...state, budget: 0 };
        
        default:
            return state;
    }
};

