import { Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps } from '../Component';

export type IPBRBaseSimpleMaterialProps = {
}

export type IPBRBaseSimpleMaterialParams = {

}

export function PBRBaseSimpleMaterialHOC(EL: React.FC) {
    return (props: IPBRBaseSimpleMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}