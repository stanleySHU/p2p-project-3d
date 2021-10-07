import { ShaderMaterial as BabylonShaderMaterial, Scene as BabylonScene, IShaderMaterialOptions } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Material'

export type IShaderMaterialProps = {
    name: string, 
    scene: BabylonScene, 
    shaderPath: any, 
    options?: Partial<IShaderMaterialOptions>
}

export type IShaderMaterialParams = {

}

function ShaderMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IShaderMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ShaderMaterialHOC(e));
}

function _(props: IShaderMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene, shaderPath, options } =  props;
    useEffect(() => {
        let obj = new BabylonShaderMaterial(name, scene, shaderPath, options);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PShaderMaterial = buildExtends<IShaderMaterialProps & IShaderMaterialParams>(_);