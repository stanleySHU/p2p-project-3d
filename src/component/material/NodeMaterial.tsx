import { INodeMaterialOptions, NodeMaterial as BabylonNodeMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPushMaterialInitial, extendsFrom as _extendsFrom  } from './PushMaterial';

export type INodeMaterialInitial<T> = IPushMaterialInitial<T> & {
    options?: Partial<INodeMaterialOptions>
};
export type INodeMaterialProps = INodeMaterialInitial<BabylonNodeMaterial>;

export const NodeMaterialHOC = (EL: Nullable<React.FC<INodeMaterialProps>>) => {
    return (props: INodeMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { name, options } = props as any;

        const instanceRef = useRef<any>();

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonNodeMaterial(name, scene!, options);
                console.log(`NodeMaterial ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(NodeMaterialHOC(e));
}

export const P2PNodeMaterial = extendsFrom<INodeMaterialProps>(null);