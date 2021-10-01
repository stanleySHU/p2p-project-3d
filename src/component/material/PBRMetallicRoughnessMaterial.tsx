import { PBRMetallicRoughnessMaterial as BabylonPBRMetallicRoughnessMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IPBRBaseSimpleMaterialInitial, buildExtends as _buildExtends } from './PBRBaseSimpleMaterial';

export type IPBRMetallicRoughnessMaterialInitial<T> = IPBRBaseSimpleMaterialInitial<T> & {};
export type IPBRMetallicRoughnessMaterialProps = IPBRMetallicRoughnessMaterialInitial<BabylonPBRMetallicRoughnessMaterial>;

function PBRMetallicRoughnessMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRMetallicRoughnessMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props as any;

        useEffect(() => {
            console.log(`PBRMetallicRoughnessMaterial ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPBRMetallicRoughnessMaterial(name, scene!);
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