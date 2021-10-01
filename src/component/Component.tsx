import React, { ReactNode, useEffect, useRef } from "react";
import { Nullable } from "../utils/customType";

export type IComponentProps<T> = {
    name: string,
    instanceRef?: React.MutableRefObject<T>,
    parentInstanceRef?: React.MutableRefObject<T>,
    children?: ReactNode
}

function ComponentHOC<T>(EL: React.FC<T>) {
    return (props: T) => {
        const instanceRef = useRef<any>();
        useEffect(() =>{
            return () => {
                instanceRef.current = null;
            }
        }, []);
        return <EL {...props} instanceRef={instanceRef}/>
    }
}

export function ChildHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IComponentProps<any>) => {
        const { instanceRef } = props;

        let children = React.Children.map(props.children, (child: any) => {
            const Type = child.type;
            return <Type {...child.props} parentInstanceRef={instanceRef}/>
        })
        if (EL == null) return <>{children}</>
        return <EL {...props}>{children}</EL>
    }
}


export function buildExtends<T>(e: any) {
    return ComponentHOC<T>(e);
}