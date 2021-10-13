import { PBRMetallicRoughnessMaterial as BabylonPBRMetallicRoughnessMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MaterialHOC } from './Material';
import { PBRBaseMaterialHOC } from './PBRBaseMaterial';
import { PBRBaseSimpleMaterialHOC } from './PBRBaseSimpleMaterial';
import { PushMaterialHOC } from './PushMaterial';

export type IPBRMetallicRoughnessMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene
}

export type IPBRMetallicRoughnessMaterialParams = {

}

function PBRMetallicRoughnessMaterialHOC(EL: React.FC) {
    return (props: IPBRMetallicRoughnessMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IPBRMetallicRoughnessMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPBRMetallicRoughnessMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPBRMetallicRoughnessMaterial= getEL<IPBRMetallicRoughnessMaterialParams>(_, [
    PBRMetallicRoughnessMaterialHOC,
    PBRBaseSimpleMaterialHOC,
    PBRBaseMaterialHOC,
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);