import { PBRMetallicRoughnessMaterial as BabylonPBRMetallicRoughnessMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPBRBaseSimpleMaterialInitial, extendsFrom as _extendsFrom } from './PBRBaseSimpleMaterial';

export type IPBRMetallicRoughnessMaterialInitial<T> = IPBRBaseSimpleMaterialInitial<T> & {};
export type IPBRMetallicRoughnessMaterialProps = IPBRMetallicRoughnessMaterialInitial<BabylonPBRMetallicRoughnessMaterial>;

export const PBRMetallicRoughnessMaterialHOC = (EL: Nullable<React.FC<IPBRMetallicRoughnessMaterialProps>>) => {
    return (props: IPBRMetallicRoughnessMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { name } = props as any;

        const instanceRef = useRef<any>();

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPBRMetallicRoughnessMaterial(name, scene!);
                console.log(`PBRMetallicRoughnessMaterial ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PBRMetallicRoughnessMaterialHOC(e));
}

export const P2PPBRMetallicRoughnessMaterial = extendsFrom<IPBRMetallicRoughnessMaterialProps>(null);