import { PBRMetallicRoughnessMaterial as BabylonPBRMetallicRoughnessMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './PBRBaseSimpleMaterial'

export type IPBRMetallicRoughnessMaterialProps = IComponentProps<BabylonPBRMetallicRoughnessMaterial> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRMetallicRoughnessMaterialHOC(e));
}

function _(props: IPBRMetallicRoughnessMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPBRMetallicRoughnessMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPBRMetallicRoughnessMaterial = buildExtends<IPBRMetallicRoughnessMaterialProps & IPBRMetallicRoughnessMaterialParams>(_);