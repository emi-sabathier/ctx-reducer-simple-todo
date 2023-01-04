import { useReducer } from 'react';

type ActionType = {
    type: string;
    payload: Todo;
};

type Todo = {
    id: string;
    content: string;
};

type TodoType = {
    todosList: Todo[];
};

const initialState: TodoType = {
    todosList: [],
};

export function storeReducer(state: TodoType, action: ActionType) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todosList: [...state.todosList, action.payload],
            };
        default:
            throw new Error();
    }
}

export function useStore() {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return {
        state,
        dispatch,
    };
}
