import React, { ReactNode, Ref, useEffect, useReducer, useRef } from "react";
import { Nullable } from "../utils/customType";
import { reducer, initialState, InitialState, Action, addChildren } from './ComponentRedux';

type ICustomProps = {
    assignTo?: string;
}

export type IComponentProps<T> = {
    name?: string,
    key?: string,
    ref?: Ref<any>,
    children?: ReactNode
} & {
    state: InitialState,
    dispatch: React.Dispatch<Action>,
    parentDispatch: React.Dispatch<Action>
} & ICustomProps;

function ComponentHOC<T>(EL: React.FC<T>) {
    return (props: T & IComponentProps<any>) => {
        const [ state, dispatch ] = useReducer(reducer, initialState);
        const { parentDispatch } = props;

        useEffect(() =>{
            parentDispatch(addChildren(state.instance));
            return () => {
            }
        }, []);

        return <EL {...props} state={state} dispatch={dispatch}/>
    }
}

export function ChildHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IComponentProps<any>) => {
        const { dispatch } = props;
        let children = React.Children.map(props.children, child => (React.cloneElement(child as any, {
            parentDispatch: dispatch
        })));

        if (EL == null) return <>{children}</>
        return <EL {...props}>{children}</EL>
    }
}

export function buildExtends<T>(e: any) {
    return ComponentHOC<T>(e);
}