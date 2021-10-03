import { TransformNode as BabylonTransformNode } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { INodeInitial, buildExtends as _buildExtends } from './Node';

export type ITransformNodeInitial<T> = INodeInitial<T> & {
    isPure?: boolean
};
export type ITransformNodeProps = ITransformNodeInitial<BabylonTransformNode> & ITransformNodeOptions;

function TransformNodeHOC<T>(EL: React.FC<T>) {
    return (props: T & ITransformNodeProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, isPure } = props;

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