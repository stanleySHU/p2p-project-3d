import { Node as BabylonNode } from '@babylonjs/core';
import React, { ReactNode, useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';

export type INodeInitial<T> = {
    name: string,
    instanceRef?: React.MutableRefObject<T>,
    children?: ReactNode
}
export type INodeProps = INodeInitial<BabylonNode> & INodeOptions;

function NodeHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & INodeProps) => {
        const { scene } = useContext(SceneContext);
        const { name } = props;

        const instanceRef = useRef<any>();

        useEffect(() => {
            console.log(`Node ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonNode(name, scene);
                console.log(`Node ${name} created`);
            }

            return () => {
                instanceRef.current = undefined;
            };
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props} instanceRef={instanceRef}>
            {props.children}
        </EL>
    }
}

export function extendsFrom<T>(e: any) {
    return NodeHOC<T>(e);
}

export const P2PNode = extendsFrom<INodeProps>(null);
export type INodeOptions = {
    
}