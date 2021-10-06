import { TransformNode as BabylonTransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { INodeInitial, buildExtends as _buildExtends } from './Node';

export type ITransformNodeInitial<T> = INodeInitial<T> & {
    isPure?: boolean
};
export type ITransformNodeProps = ITransformNodeInitial<BabylonTransformNode> & ITransformNodeOptions;

function TransformNodeHOC<T>(EL: React.FC<T>) {
    return (props: T & ITransformNodeProps) => {
        const { scene, instance, name, isPure } = props;

        useEffect(() => {
            console.log(`TransformNode ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonTransformNode(name, scene, isPure);
                console.log(`TransformNode ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TransformNodeHOC(e));
}

export const P2PTransformNode = buildExtends<ITransformNodeProps>(ChildHOC(null));

export type ITransformNodeOptions = {
    
}