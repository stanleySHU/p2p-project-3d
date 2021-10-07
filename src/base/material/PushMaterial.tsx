import { PushMaterial as BabylonPushMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Material'

export type IPushMaterialProps = {
    name: string, 
    scene: BabylonScene
}

export type IPushMaterialParams = {

}

function PushMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPushMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PushMaterialHOC(e));
}

function _(props: IPushMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene } =  props;
    useEffect(() => {
        let obj = new BabylonPushMaterial(name, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPushMaterial = buildExtends<IPushMaterialProps & IPushMaterialParams>(_);