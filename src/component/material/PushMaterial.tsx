import { PushMaterial as BabylonPushMaterial } from '@babylonjs/core';import React, { useContext, useEffect, useRef } from 'react';
import { ChildHOC } from '../Component';
import { IMaterialInitial, buildExtends as _buildExtends } from './Material';

export type IPushMaterialInitial<T> = IMaterialInitial<T> & {};
export type IPushMaterialProps = IPushMaterialInitial<BabylonPushMaterial>;

function PushMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPushMaterialProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`PushMaterial ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonPushMaterial(name, scene);
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