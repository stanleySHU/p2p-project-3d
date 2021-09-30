import { TransformNode as BabylonTransformNode } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { INodeInitial, extendsFrom as _extendsFrom } from './Node';

export type ITransformNodeInitial<T> = INodeInitial<T> & {
    isPure?: boolean
};
export type ITransformNodeProps = ITransformNodeInitial<BabylonTransformNode> & ITransformNodeOptions;

function TransformNodeHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & ITransformNodeProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, isPure } = props;

        useEffect(() => {
            console.log('translate')
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonTransformNode(name, scene, isPure);
                console.log(`TransformNode ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TransformNodeHOC(e));
}

export const P2PTransformNode = extendsFrom<ITransformNodeProps>(null);

export type ITransformNodeOptions = {
    
}