import { BackgroundMaterial as BabylonBackgroundMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './PushMaterial'

export type IBackgroundMaterialProps = {
    name: string, 
    scene: BabylonScene
}

export type IBackgroundMaterialParams = {

}

function BackgroundMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IBackgroundMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BackgroundMaterialHOC(e));
}

function _(props: IBackgroundMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene } =  props;
    useEffect(() => {
        let obj = new BabylonBackgroundMaterial(name, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PBackgroundMaterial = buildExtends<IBackgroundMaterialProps & IBackgroundMaterialParams>(_);