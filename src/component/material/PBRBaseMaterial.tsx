import { PBRBaseMaterial as BabylonPBRBaseMaterial } from '@babylonjs/core';
import React from 'react';
import { Nullable } from '../../utils/customType';
import { IPushMaterialInitial, extendsFrom as _extendsFrom } from './PushMaterial';

export type IPBRBaseMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IPBRBaseMaterialProps = IPBRBaseMaterialInitial<BabylonPBRBaseMaterial>;

function PBRBaseMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IPBRBaseMaterialProps) => {
        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    };
} 

export function extendsFrom<T>(e: any) {
    return PBRBaseMaterialHOC(_extendsFrom<T>(e));
}