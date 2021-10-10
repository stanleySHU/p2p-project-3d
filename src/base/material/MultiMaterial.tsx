import { MultiMaterial as BabylonMultiMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Material'

export type IMultiMaterialProps = IComponentProps<BabylonMultiMaterial> & {
    name: string, 
    scene: BabylonScene
}

export type IMultiMaterialParams = {

}

function MultiMaterialHOC(EL: React.FC) {
    return (props: IMultiMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiMaterialHOC(e));
}

function _(props: IMultiMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMultiMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiMaterial = buildExtends<IMultiMaterialProps & IMultiMaterialParams>(_);