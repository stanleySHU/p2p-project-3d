import { Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps } from '../Component';

export type IPBRBaseMaterialProps = {
}

export type IPBRBaseMaterialParams = {

}

export function PBRBaseMaterialHOC(EL: React.FC) {
    return (props: IPBRBaseMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}
