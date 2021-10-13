import React, { ReactNode, useState } from "react";

export type IComponentProps = {
    name?: string,
    key?: string,
    children?: ReactNode
} & {
    instance?,
    parentInstance?,
    init?: React.Dispatch<any>
};

export function ComponentHOC(EL: React.FC<IComponentProps>) {
    return (props: IComponentProps) => {
        const [ instance, setInstance ] = useState<any>();
        return <EL {...props} instance={instance} init={setInstance}/>
    }
}

export function P2PChildren(props: IComponentProps, a?) {
    const { instance } = props;
    let children = React.Children.map(props.children, child => (React.cloneElement(child as any, { 
        parentInstance: instance
    })));
    return <>{instance && children}</>
}

export function getEL<T>(el: React.FC<T>, hocs: any[]) {
    for (let hoc of hocs) {
        el = hoc(el);
    }    
    return el;
}