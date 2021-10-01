import { INodeMaterialOptions, NodeMaterial as BabylonNodeMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IPushMaterialInitial, buildExtends as _buildExtends  } from './PushMaterial';

export type INodeMaterialInitial<T> = IPushMaterialInitial<T> & {
    options?: Partial<INodeMaterialOptions>
};
export type INodeMaterialProps = INodeMaterialInitial<BabylonNodeMaterial>;

function NodeMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & INodeMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, options } = props as any;

        useEffect(() => {
            console.log(`NodeMaterial ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonNodeMaterial(name, scene!, options);
                console.log(`NodeMaterial ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NodeMaterialHOC(e));
}

export const P2PNodeMaterial = buildExtends<INodeMaterialProps>(ChildHOC(null));