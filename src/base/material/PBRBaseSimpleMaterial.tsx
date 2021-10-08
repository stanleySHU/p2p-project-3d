import { Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps } from '../Component';
import { buildExtends as _buildExtends } from './PBRBaseMaterial'

export type IPBRBaseSimpleMaterialProps = {
}

export type IPBRBaseSimpleMaterialParams = {

}

function PBRBaseSimpleMaterialHOC(EL: React.FC) {
    return (props: IPBRBaseSimpleMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRBaseSimpleMaterialHOC(e));
}