type ActionType = "processUpdate" |  "load" | "loadSucces" | "loadFail" | "loadFinish";

export type InitialState = {
    readonly process: number,
    readonly loading: false
};

export type Action = {
    type: ActionType,
    payload?: {
        loading?: boolean,
        process?: number,
        detail?: string
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

export function load(): Action {
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

export function loadFail(text: string): Action {
    return {
        type: 'loadSucces',
        payload: {
            detail: text
        }
    }
}

export function loadSucces(text: string): Action {
    return {
        type: 'loadSucces',
        payload: {
            detail: text
        }
    }
}

export function loadFinish(): Action {
    return {
        type: 'loadFinish',
        payload: {
            loading: false
        }
    }
}