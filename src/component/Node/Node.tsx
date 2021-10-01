import { Node as BabylonNode } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { SceneContext } from '../Scene';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../Component'

export type INodeInitial<T> = IComponentProps<T> & {}
export type INodeProps = INodeInitial<BabylonNode> & INodeOptions;

function NodeHOC<T>(EL: React.FC<T>) {
    return (props: T & INodeProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Node ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonNode(name, scene);
                console.log(`Node ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NodeHOC(e));
}

export const P2PNode = buildExtends<INodeProps>(ChildHOC(null));
export type INodeOptions = {}