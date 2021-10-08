import { BackgroundMaterial as BabylonBackgroundMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
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
    const { instance, name, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonBackgroundMaterial(name, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBackgroundMaterial = buildExtends<IBackgroundMaterialProps & IBackgroundMaterialParams>(_);