import { ShaderMaterial as BabylonShaderMaterial, Scene as BabylonScene, IShaderMaterialOptions } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Material'

export type IShaderMaterialProps = IComponentProps<BabylonShaderMaterial> &{
    name: string, 
    scene: BabylonScene, 
    shaderPath: any, 
    options?: Partial<IShaderMaterialOptions>
}

export type IShaderMaterialParams = {

}

function ShaderMaterialHOC(EL: React.FC) {
    return (props: IShaderMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ShaderMaterialHOC(e));
}

function _(props: IShaderMaterialProps) {
    const { init, name, scene, shaderPath, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonShaderMaterial(name, scene, shaderPath, options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PShaderMaterial = buildExtends<IShaderMaterialProps & IShaderMaterialParams>(_);