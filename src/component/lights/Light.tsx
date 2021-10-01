import { Light as BabylonLight } from '@babylonjs/core';
import React from 'react';
import { INodeInitial, buildExtends as _buildExtends } from '../node/Node';

export type ILightInitial<T> = INodeInitial<T> & {};
export type ILightProps = ILightInitial<BabylonLight> & ILightOptions;

function LightHOC<T>(EL: React.FC<T>) {
    return (props: T & ILightProps) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LightHOC(e));
};

export type ILightOptions = {
    
}