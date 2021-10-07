import { StandardMaterial as BabylonStandardMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './PushMaterial'

export type IStandardMaterialProps = {
    name: string, 
    scene: BabylonScene
}

export type IStandardMaterialParams = {

}

function StandardMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IStandardMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StandardMaterialHOC(e));
}

function _(props: IStandardMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene } =  props;
    useEffect(() => {
        let obj = new BabylonStandardMaterial(name, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PStandardMaterial = buildExtends<IStandardMaterialProps & IStandardMaterialParams>(_);