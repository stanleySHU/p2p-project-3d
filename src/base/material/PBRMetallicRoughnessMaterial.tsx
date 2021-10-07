import { PBRMetallicRoughnessMaterial as BabylonPBRMetallicRoughnessMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './PBRBaseSimpleMaterial'

export type IPBRMetallicRoughnessMaterialProps = {
    name: string, 
    scene: BabylonScene
}

export type IPBRMetallicRoughnessMaterialParams = {

}

function PBRMetallicRoughnessMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRMetallicRoughnessMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRMetallicRoughnessMaterialHOC(e));
}

function _(props: IPBRMetallicRoughnessMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene } =  props;
    useEffect(() => {
        let obj = new BabylonPBRMetallicRoughnessMaterial(name, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPBRMetallicRoughnessMaterial = buildExtends<IPBRMetallicRoughnessMaterialProps & IPBRMetallicRoughnessMaterialParams>(_);