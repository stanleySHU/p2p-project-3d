import { AnyMxRecord } from "dns";
import React, { ReactNode, useState } from "react";

export type IComponentProps<T = any, P = any> = {
    name?: string,
    key?: string,
    children?: ReactNode
} & {
    instance?: T,
    parentInstance?: P,
    init?: React.Dispatch<any>
};

export function ComponentHOC(EL: React.FC<IComponentProps>) {
    return (props: IComponentProps) => {
        const [ instance, setInstance ] = useState<any>();
        return <EL {...props} instance={instance} init={setInstance}/>
    }
}

function addChildrenProps(children, instance) {
    return React.Children.map(children, child => (React.cloneElement(child as any, { 
        parentInstance: instance
    })));
}

export function P2PChildren(props: IComponentProps) {
    const { instance } = props;
    let children = addChildrenProps(props.children, instance);
    return <>{instance && children}</>
}
 
export function P2PLayer(props: IComponentProps) {
    const { parentInstance } = props;
    let children = addChildrenProps(props.children, parentInstance);
    return <>{children}</>;
}

export function getEL<T>(el: React.FC<T>, hocs: any[]) {
    for (let hoc of hocs) {
        el = hoc(el);
    }    
    return React.memo(el) as React.FC<T>;
}