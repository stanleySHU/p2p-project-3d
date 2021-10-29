import { StandardMaterial as BabylonStandardMaterial, Scene as BabylonScene, Texture } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { IMaterialParams, MaterialHOC } from './Material';
import { IPushMaterialParams, PushMaterialHOC } from './PushMaterial';

export type IStandardMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene
}

export type IStandardMaterialParams = {
   
}

function StandardMaterialHOC(EL: React.FC<IStandardMaterialParams>) {
    return (props: IStandardMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IStandardMaterialProps) {
    const { init, name, scene, parentInstance } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStandardMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStandardMaterial = getEL<IMaterialParams & IPushMaterialParams & IStandardMaterialParams & IStandardMaterialProps>(_, [
    StandardMaterialHOC,
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);