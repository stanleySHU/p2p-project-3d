import { INodeMaterialOptions, NodeMaterial as BabylonNodeMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './PushMaterial'

export type INodeMaterialProps = {
    name: string, 
    scene?: BabylonScene, 
    options?: Partial<INodeMaterialOptions>
}

export type INodeMaterialParams = {

}

function NodeMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & INodeMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NodeMaterialHOC(e));
}

function _(props: INodeMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene, options } =  props;
    useEffect(() => {
        let obj = new BabylonNodeMaterial(name, scene, options);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PNodeMaterial = buildExtends<INodeMaterialProps & INodeMaterialParams>(_);