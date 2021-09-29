import { ShadowLight as BabylonShadowLight } from '@babylonjs/core';
import React from 'react';
import { ILightInitial, extendsFrom as _extendsFrom } from './Light';

export type IShadowLightInitial<T> = {
    
} & ILightInitial<T>;
export type IShadowLightProps = IShadowLightInitial<BabylonShadowLight> & IShadowLightOptins;

export const ShadowLightHOC = (EL: React.FC<IShadowLightProps>) => {
    return (props: IShadowLightProps) => {
        const { instanceRef } = props;
        return <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(ShadowLightHOC(e));
};

export type IShadowLightOptins = {
    
}