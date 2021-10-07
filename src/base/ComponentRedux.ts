export type ActionType = 'new' | 'add';

export type InitialState = {
    readonly instance: any;
    readonly children: readonly any[]
}

export type Action = {
    type: ActionType,
    payload?: {
        instance?: any
    }
}

export const initialState: InitialState = {
    instance: null,
    children: []
} 

export function reducer(state: InitialState, action: Action): InitialState {
    switch (action.type) {
        case 'new': {
            return { ...state, instance: action.payload?.instance }
        }
        case 'add': {
            return { ...state, children: [...state.children, action.payload?.instance] }
        }
        default: {

        }
    }
    return state;
} 

export function newChildren(child: any): Action {
    return {
        type: 'new',
        payload: {
            instance: child
        }
    }
}

export function addChildren(child: any): Action {
    return {
        type: 'add',
        payload: {
            instance: child
        }
    }
}