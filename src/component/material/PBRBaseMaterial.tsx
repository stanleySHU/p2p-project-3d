import { PBRBaseMaterial as BabylonPBRBaseMaterial } from '@babylonjs/core';
import React from 'react';
import { Nullable } from '../../utils/customType';
import { IPushMaterialInitial, extendsFrom as _extendsFrom } from './PushMaterial';

export type IPBRBaseMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IPBRBaseMaterialProps = IPBRBaseMaterialInitial<BabylonPBRBaseMaterial>;

function PBRBaseMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IPBRBaseMaterialProps) => {
        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return PBRBaseMaterialHOC(_extendsFrom<T>(e));
}