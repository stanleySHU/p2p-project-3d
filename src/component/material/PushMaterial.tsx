import { PushMaterial as BabylonPushMaterial } from '@babylonjs/core';import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IMaterialInitial, buildExtends as _buildExtends } from './Material';

export type IPushMaterialInitial<T> = IMaterialInitial<T> & {};
export type IPushMaterialProps = IPushMaterialInitial<BabylonPushMaterial>;

function PushMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPushMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props as any;

        useEffect(() => {
            console.log(`PushMaterial ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPushMaterial(name, scene!);
                console.log(`PushMaterial ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PushMaterialHOC(e));
}

export const P2PPushMaterial = buildExtends<IPushMaterialProps>(ChildHOC(null));