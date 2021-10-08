import { StandardMaterial as BabylonStandardMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
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
    const { instance, name, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonStandardMaterial(name, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStandardMaterial = buildExtends<IStandardMaterialProps & IStandardMaterialParams>(_);