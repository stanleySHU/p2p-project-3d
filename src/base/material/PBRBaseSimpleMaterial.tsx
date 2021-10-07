import { Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './PBRBaseMaterial'

export type IPBRBaseSimpleMaterialProps = {
}

export type IPBRBaseSimpleMaterialParams = {

}

function PBRBaseSimpleMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRBaseSimpleMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRBaseSimpleMaterialHOC(e));
}