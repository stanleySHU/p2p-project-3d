import { MultiMaterial as BabylonMultiMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Material'

export type IMultiMaterialProps = {
    name: string, 
    scene: BabylonScene
}

export type IMultiMaterialParams = {

}

function MultiMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiMaterialHOC(e));
}

function _(props: IMultiMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene } =  props;
    useEffect(() => {
        let obj = new BabylonMultiMaterial(name, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PMultiMaterial = buildExtends<IMultiMaterialProps & IMultiMaterialParams>(_);