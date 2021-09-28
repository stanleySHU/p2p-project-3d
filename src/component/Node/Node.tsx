import { Node as BabylonNode } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';

export type INodeInitial<T> = {
    name: string,
    instanceRef?: React.MutableRefObject<T>
}

export type INodeProps = INodeInitial<BabylonNode>;

export type INodeOptions = {
    
}

export const NodeHOC = (EL: Nullable<React.FC<INodeProps>>) => {
    return (props: INodeProps) => {
        const { scene } = useContext(SceneContext);
        const { name } = props;

        const instanceRef = useRef<any>();

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonNode(name, scene);
                console.log('node created');
            }

            return () => {
                instanceRef.current = undefined;
            };
        }, []);

        return EL &&  <EL {...props} instanceRef={instanceRef}/>
    }
}