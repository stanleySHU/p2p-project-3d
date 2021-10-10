import React, { ReactNode, Ref, useEffect, useReducer, useRef, useState } from "react";
import { Nullable } from "../utils/customType";

export type IComponentProps<T> = {
    name?: string,
    key?: string,
    children?: ReactNode
} & {
    parentInstance?: any
};

function ComponentHOC<T>(EL: React.FC<T>) {
    return (props: T & IComponentProps<any>) => {
        const ref = useRef();
        return <EL {...props} ref={ref}/>
    }
}

export function P2PChildren(props: IComponentProps<any>) {
    const { instance } = props;
    let children = React.Children.map(props.children, child => (React.cloneElement(child as any, { 
        parentInstance: instance
    })));
    return <>{instance && children}</>
}

export function buildExtends<T>(e: any) {
    return ComponentHOC<T>(e);
}