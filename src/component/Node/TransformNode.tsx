import { TransformNode as BabylonTransformNode } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { INodeInitial } from './Node';

export type ITransformNodeInitial<T> = {
    isPure?: boolean
} & INodeInitial<T>;
export type ITransformNodeProps = ITransformNodeInitial<BabylonTransformNode>;

export const TransformNodeHOC = (EL: Nullable<React.FC<ITransformNodeProps>>) => {
    return (props: ITransformNodeProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, isPure } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonTransformNode(name, scene, isPure);
                console.log('TransformNode created');
            }
        }, []);

        return EL && <EL {...props}/>
    }
}