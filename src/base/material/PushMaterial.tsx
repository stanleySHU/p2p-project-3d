import { PushMaterial as BabylonPushMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
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
    const { instance, name, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonPushMaterial(name, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPushMaterial = buildExtends<IPushMaterialProps & IPushMaterialParams>(_);