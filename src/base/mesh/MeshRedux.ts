import * as P from '../node/TransformNodeRedux';

export type ActionType = P.Action;

export type InitialState = P.InitialState & {

}

export type Action = P.Action & {

}

export const initialState: InitialState = P.initialState;

export function reducer(state: InitialState, action: Action) {
    switch (action.type) {
        
    }
    return P.reducer(state, action);
}