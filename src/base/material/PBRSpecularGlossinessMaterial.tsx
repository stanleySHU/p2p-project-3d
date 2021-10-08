import { PBRSpecularGlossinessMaterial as BabylonPBRSpecularGlossinessMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
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
    const { instance, name, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonPBRSpecularGlossinessMaterial(name, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPBRSpecularGlossinessMaterial = buildExtends<IPBRSpecularGlossinessMaterialProps & IPBRSpecularGlossinessMaterialParams>(_);