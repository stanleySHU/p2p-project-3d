import { PBRBaseSimpleMaterial as BabylonPBRBaseSimpleMaterial } from '@babylonjs/core';
import React from 'react';
import { Nullable } from '../../utils/customType';
import { IPBRBaseMaterialInitial, buildExtends as _buildExtends } from './PBRBaseMaterial';

export type IPBRBaseSimpleMaterialInitial<T> = IPBRBaseMaterialInitial<T> & {};
export type IPBRBaseSimpleMaterialProps = IPBRBaseSimpleMaterialInitial<BabylonPBRBaseSimpleMaterial>;

function PBRBaseSimpleMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRBaseSimpleMaterialProps) => {
        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return PBRBaseSimpleMaterialHOC(_buildExtends<T>(e));
}
