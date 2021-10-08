import React, { ReactNode, Ref, useEffect, useReducer, useRef, useState } from "react";
import { Nullable } from "../utils/customType";
import { reducer, initialState, InitialState, Action, addChildren } from './ComponentRedux';

export type IComponentProps<T> = {
    name?: string,
    key?: string,
    children?: ReactNode
} & {
    instance?: React.MutableRefObject<any>
};

function ComponentHOC<T>(EL: React.FC<T>) {
    return (props: T & IComponentProps<any>) => {
        const instanceRef = useRef<any>(null);
        return <EL {...props} instance={instanceRef}/>
    }
}

export function P2PChildren(props: IComponentProps<any>) {
    let children = React.Children.map(props.children, child => (React.cloneElement(child as any, {
    })));
    return <>{children}</>
}



export function buildExtends<T>(e: any) {
    return ComponentHOC<T>(e);
}