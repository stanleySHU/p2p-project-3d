import { Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './PushMaterial'

export type IPBRBaseMaterialProps = {
}

export type IPBRBaseMaterialParams = {

}

function PBRBaseMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRBaseMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRBaseMaterialHOC(e));
}