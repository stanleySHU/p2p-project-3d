import { PushMaterial as BabylonPushMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Material'

export type IPushMaterialProps = IComponentProps<BabylonPushMaterial> &{
    name: string, 
    scene: BabylonScene
}

export type IPushMaterialParams = {

}

function PushMaterialHOC(EL: React.FC) {
    return (props: IPushMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PushMaterialHOC(e));
}

function _(props: IPushMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPushMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPushMaterial = buildExtends<IPushMaterialProps & IPushMaterialParams>(_);