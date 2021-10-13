import { PushMaterial as BabylonPushMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren, getEL, ComponentHOC } from '../Component';
import { MaterialHOC } from './Material';

export type IPushMaterialProps = IComponentProps &{
    name: string, 
    scene: BabylonScene
}

export type IPushMaterialParams = {

}

export function PushMaterialHOC(EL: React.FC) {
    return (props: IPushMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IPushMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPushMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPushMaterial = getEL<IPushMaterialParams>(_, [
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
])
