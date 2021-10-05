import { PBRBaseMaterial as BabylonPBRBaseMaterial } from '@babylonjs/core';
import React from 'react';
import { IPushMaterialInitial, buildExtends as _buildExtends } from './PushMaterial';

export type IPBRBaseMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IPBRBaseMaterialProps = IPBRBaseMaterialInitial<BabylonPBRBaseMaterial>;

function PBRBaseMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRBaseMaterialProps) => {
        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return PBRBaseMaterialHOC(_buildExtends<T>(e));
}