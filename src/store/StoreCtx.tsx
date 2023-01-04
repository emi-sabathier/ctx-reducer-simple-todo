// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { createContext, ReactNode, useReducer } from 'react';

type ChildrenType = {
    children: ReactNode;
};

export type Todo = {
    id: string;
    content: string;
};

type TodoType = {
    todosList: Todo[];
};

export const StoreContext = createContext([]);

const initialState: TodoType[] = {
    todosList: [],
};

export function storeReducer(state, action) {
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
    // return (
    //     <StoreContext.Provider value={{state, dispatch}}>
    //         {children}
    //     </StoreContext.Provider>
    // )
}
