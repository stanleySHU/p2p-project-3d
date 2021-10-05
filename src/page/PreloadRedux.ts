type ActionType = "processUpdate" |  "load" | "loadSucces" | "loadFail";

export type InitialState = {
    process: number,
    loading: false
};

export type Action = {
    type: ActionType,
    payload?: {
        loading?: boolean,
        process?: number
    }
};

export const initialState: InitialState = {
    process: 0,
    loading: false
}

export function reducer(state: InitialState, action: Action) {
    switch(action.type) {
        
    }
    return state;
}

export function startLoad(): Action {
    return {
        type: 'load',
        payload: {
            loading: true
        }
    }
}

export function processUpdate(process: number): Action {
    return {
        type: 'processUpdate',
        payload: {
            process: process
        }
    }
}

export function loadFail(): Action {
    return {
        type: 'loadSucces',
        payload: {
            loading: false
        }
    }
}

export function loadSucces(): Action {
    return {
        type: 'loadSucces',
        payload: {
            loading: true
        }
    }
}

