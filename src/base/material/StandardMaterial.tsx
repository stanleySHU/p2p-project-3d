import { StandardMaterial as BabylonStandardMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './PushMaterial'

export type IStandardMaterialProps = IComponentProps<BabylonStandardMaterial> &{
    name: string, 
    scene: BabylonScene
}

export type IStandardMaterialParams = {

}

function StandardMaterialHOC(EL: React.FC) {
    return (props: IStandardMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StandardMaterialHOC(e));
}

function _(props: IStandardMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStandardMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStandardMaterial = buildExtends<IStandardMaterialProps & IStandardMaterialParams>(_);