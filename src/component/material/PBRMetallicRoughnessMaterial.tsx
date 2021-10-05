import { PBRMetallicRoughnessMaterial as BabylonPBRMetallicRoughnessMaterial } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IPBRBaseSimpleMaterialInitial, buildExtends as _buildExtends } from './PBRBaseSimpleMaterial';

export type IPBRMetallicRoughnessMaterialInitial<T> = IPBRBaseSimpleMaterialInitial<T> & {};
export type IPBRMetallicRoughnessMaterialProps = IPBRMetallicRoughnessMaterialInitial<BabylonPBRMetallicRoughnessMaterial>;

function PBRMetallicRoughnessMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRMetallicRoughnessMaterialProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`PBRMetallicRoughnessMaterial ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonPBRMetallicRoughnessMaterial(name, scene);
                console.log(`PBRMetallicRoughnessMaterial ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRMetallicRoughnessMaterialHOC(e));
}

export const P2PPBRMetallicRoughnessMaterial = buildExtends<IPBRMetallicRoughnessMaterialProps>(ChildHOC(null));