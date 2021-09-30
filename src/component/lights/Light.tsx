import { Light as BabylonLight } from '@babylonjs/core';
import React from 'react';
import { INodeInitial, extendsFrom as _extendsFrom } from '../node/Node';

export type ILightInitial<T> = INodeInitial<T> & {
    
};
export type ILightProps = ILightInitial<BabylonLight> & ILightOptions;

function LightHOC<T>(EL: React.FC<T>) {
    return (props: T & ILightProps) => {
        return <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(LightHOC(e));
};

export type ILightOptions = {
    
}