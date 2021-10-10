import { PBRSpecularGlossinessMaterial as BabylonPBRSpecularGlossinessMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './PBRBaseSimpleMaterial'

export type IPBRSpecularGlossinessMaterialProps = IComponentProps<BabylonPBRSpecularGlossinessMaterial> &{
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRSpecularGlossinessMaterialHOC(e));
}

function _(props: IPBRSpecularGlossinessMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPBRSpecularGlossinessMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPBRSpecularGlossinessMaterial = buildExtends<IPBRSpecularGlossinessMaterialProps & IPBRSpecularGlossinessMaterialParams>(_);