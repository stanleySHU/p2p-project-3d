import { PBRSpecularGlossinessMaterial as BabylonPBRSpecularGlossinessMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MaterialHOC } from './Material';
import { PBRBaseMaterialHOC } from './PBRBaseMaterial';
import { PBRBaseSimpleMaterialHOC } from './PBRBaseSimpleMaterial';
import { PushMaterialHOC } from './PushMaterial';

export type IPBRSpecularGlossinessMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene
}

export type IPBRSpecularGlossinessMaterialParams = {

}

function PBRSpecularGlossinessMaterialHOC(EL: React.FC) {
    return (props: IPBRSpecularGlossinessMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IPBRSpecularGlossinessMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPBRSpecularGlossinessMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPBRSpecularGlossinessMaterial = getEL<IPBRSpecularGlossinessMaterialParams>(_, [
    PBRSpecularGlossinessMaterialHOC,
    PBRBaseSimpleMaterialHOC,
    PBRBaseMaterialHOC,
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);