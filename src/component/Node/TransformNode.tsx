import { TransformNode as BabylonTransformNode } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { INodeInitial, extendsFrom as _extendsFrom } from './Node';

export type ITransformNodeInitial<T> = {
    isPure?: boolean
} & INodeInitial<T>;
export type ITransformNodeProps = ITransformNodeInitial<BabylonTransformNode> & ITransformNodeOptions;

export const TransformNodeHOC = (EL: Nullable<React.FC<ITransformNodeProps>>) => {
    return (props: ITransformNodeProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, isPure } = props;

        useEffect(() => {
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