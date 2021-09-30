import { PBRBaseSimpleMaterial as BabylonPBRBaseSimpleMaterial } from '@babylonjs/core';
import React from 'react';
import { Nullable } from '../../utils/customType';
import { IPBRBaseMaterialInitial, extendsFrom as _extendsFrom } from './PBRBaseMaterial';

export type IPBRBaseSimpleMaterialInitial<T> = IPBRBaseMaterialInitial<T> & {};
export type IPBRBaseSimpleMaterialProps = IPBRBaseSimpleMaterialInitial<BabylonPBRBaseSimpleMaterial>;

function PBRBaseSimpleMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IPBRBaseSimpleMaterialProps) => {
        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return PBRBaseSimpleMaterialHOC(_extendsFrom<T>(e));
}
