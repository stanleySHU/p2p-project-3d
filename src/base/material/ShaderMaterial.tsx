import { ShaderMaterial as BabylonShaderMaterial, Scene as BabylonScene, IShaderMaterialOptions } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MaterialHOC } from './Material';

export type IShaderMaterialProps = IComponentProps&{
    name: string, 
    scene: BabylonScene, 
    shaderPath: any, 
    options?: Partial<IShaderMaterialOptions>
}

export type IShaderMaterialParams = {

}

export function ShaderMaterialHOC(EL: React.FC) {
    return (props: IShaderMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IShaderMaterialProps) {
    const { init, name, scene, shaderPath, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonShaderMaterial(name, scene, shaderPath, options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PShaderMaterial = getEL<IShaderMaterialParams>(_, [
    ShaderMaterialHOC,
    MaterialHOC,
    ComponentHOC
])