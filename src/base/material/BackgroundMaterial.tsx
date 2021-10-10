import { BackgroundMaterial as BabylonBackgroundMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './PushMaterial'

export type IBackgroundMaterialProps = IComponentProps<BabylonBackgroundMaterial> & {
    name: string, 
    scene: BabylonScene
}

export type IBackgroundMaterialParams = {

}

function BackgroundMaterialHOC(EL: React.FC) {
    return (props: IBackgroundMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BackgroundMaterialHOC(e));
}

function _(props: IBackgroundMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonBackgroundMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBackgroundMaterial = buildExtends<IBackgroundMaterialProps & IBackgroundMaterialParams>(_);