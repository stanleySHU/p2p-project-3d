import { PBRBaseSimpleMaterial as BabylonPBRBaseSimpleMaterial } from '@babylonjs/core';
import React from 'react';
import { Nullable } from '../../utils/customType';
import { IPBRBaseMaterialInitial, extendsFrom as _extendsFrom } from './PBRBaseMaterial';

export type IPBRBaseSimpleMaterialInitial<T> = IPBRBaseMaterialInitial<T> & {};
export type IPBRBaseSimpleMaterialProps = IPBRBaseSimpleMaterialInitial<BabylonPBRBaseSimpleMaterial>;

export const PBRBaseSimpleMaterialHOC = (EL: Nullable<React.FC<IPBRBaseSimpleMaterialProps>>) => {
    return (props: IPBRBaseSimpleMaterialProps) => {
        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PBRBaseSimpleMaterialHOC(e));
}
