import { BackgroundMaterial as BabylonBackgroundMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MaterialHOC } from './Material';
import { PushMaterialHOC } from './PushMaterial'

export type IBackgroundMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene
}

export type IBackgroundMaterialParams = {

}

function BackgroundMaterialHOC(EL: React.FC) {
    return (props: IBackgroundMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IBackgroundMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonBackgroundMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBackgroundMaterial = getEL<IBackgroundMaterialParams>(_, [
    BackgroundMaterialHOC,
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);