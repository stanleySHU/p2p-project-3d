import { Light as BabylonLight } from '@babylonjs/core';
import React from 'react';
import { INodeInitial } from '../Node/Node';

export type ILightInitial<T> = {
    
} & INodeInitial<T>;
export type ILightProps = ILightInitial<BabylonLight>

export const LightHOC = (EL: React.FC<ILightProps>) => {
    return (props: ILightProps) => {
        const { instanceRef } = props;
        return <EL {...props}/>
    }
}