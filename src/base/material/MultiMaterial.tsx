import { MultiMaterial as BabylonMultiMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
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
    const { instance, name, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonMultiMaterial(name, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiMaterial = buildExtends<IMultiMaterialProps & IMultiMaterialParams>(_);