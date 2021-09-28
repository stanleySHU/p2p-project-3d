import { ShadowLight as BabylonShadowLight } from '@babylonjs/core';
import React from 'react';
import { ILightInitial } from './Light';

export type IShadowLightInitial<T> = {
    
} & ILightInitial<T>;
export type IShadowLightProps = IShadowLightInitial<BabylonShadowLight>;

export const ShadowLightHOC = (EL: React.FC<IShadowLightProps>) => {
    return (props: IShadowLightProps) => {
        const { instanceRef } = props;
        return <EL {...props}/>
    }
}