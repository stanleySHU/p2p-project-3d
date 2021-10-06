import { ShadowLight as BabylonShadowLight } from '@babylonjs/core';
import React from 'react';
import { ILightInitial, buildExtends as _buildExtends } from './Light';

export type IShadowLightInitial<T> = ILightInitial<T> & {};
export type IShadowLightProps = IShadowLightInitial<BabylonShadowLight> & IShadowLightOptins;

function ShadowLightHOC<T>(EL: React.FC<T>) {
    return (props: T & IShadowLightProps) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ShadowLightHOC(e));
};

export type IShadowLightOptins = {
    
}