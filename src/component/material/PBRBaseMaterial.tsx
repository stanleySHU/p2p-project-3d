import { PBRBaseMaterial as BabylonPBRBaseMaterial } from '@babylonjs/core';
import React from 'react';
import { Nullable } from '../../utils/customType';
import { IPushMaterialInitial, extendsFrom as _extendsFrom } from './PushMaterial';

export type IPBRBaseMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IPBRBaseMaterialProps = IPBRBaseMaterialInitial<BabylonPBRBaseMaterial>;

export const PBRBaseMaterialHOC = (EL: Nullable<React.FC<IPBRBaseMaterialProps>>) => {
    return (props: IPBRBaseMaterialProps) => {
        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PBRBaseMaterialHOC(e));
}