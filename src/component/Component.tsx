import React, { ReactNode, useEffect, useRef } from "react";
import { Nullable } from "../utils/customType";

type ICustomProps = {
    assignTo?: string;
}

export type IComponentProps<T> = {
    name: string,
    key?: string,
    children?: ReactNode
} & {
    instance?: React.MutableRefObject<T>,
    parentInstance?: React.MutableRefObject<any>,
    componentInstances?: React.MutableRefObject<any[]>,
    parentComponentInstances?: React.MutableRefObject<(any)[]>,
} & ICustomProps;

function ComponentHOC<T>(EL: React.FC<T>) {
    return (props: T & IComponentProps<any>) => {
        const instanceRef = useRef<any>();
        const componentInstancesRef = useRef<any[]>([]); 
        const { assignTo, parentComponentInstances } = props;

        function assignChildren() {
            for (let item of componentInstancesRef.current) {
                let customParams: ICustomProps = item.custoParams;
                customParams.assignTo && (instanceRef.current[customParams.assignTo] = item);
            }
        }

        function attachChildren() {
            if (parentComponentInstances && instanceRef.current) {
                let customParams: ICustomProps = {
                    assignTo: assignTo
                } 
                instanceRef.current.custoParams = customParams;
                parentComponentInstances.current.push(instanceRef.current);
            }
        }

        useEffect(() =>{
            assignChildren();            
            attachChildren();

            return () => {
                instanceRef.current = null;
            }
        }, []);

        return <EL {...props} instance={instanceRef} componentInstances={componentInstancesRef}/>
    }
}

export function ChildHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IComponentProps<any>) => {
        const { instance, componentInstances } = props;
        let children = React.Children.map(props.children, (child: any) => {
            const Type = child.type;
            return <Type {...child.props} parentInstance={instance} parentComponentInstances={componentInstances} />
        })
        if (EL == null) return <>{children}</>
        return <EL {...props}>{children}</EL>
    }
}


export function buildExtends<T>(e: any) {
    return ComponentHOC<T>(e);
}