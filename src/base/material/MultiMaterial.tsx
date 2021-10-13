import { MultiMaterial as BabylonMultiMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MaterialHOC } from './Material';

export type IMultiMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene
}

export type IMultiMaterialParams = {

}

export function MultiMaterialHOC(EL: React.FC) {
    return (props: IMultiMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IMultiMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMultiMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiMaterial = getEL<IMultiMaterialParams>(_, [
    MultiMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);