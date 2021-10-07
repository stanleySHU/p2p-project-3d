import { Material as BabylonMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../Component'

export type IMaterialProps = {
    name: string, 
    scene: BabylonScene, 
    doNotAdd?: boolean
}

export type IMaterialParams = {

}

function MaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MaterialHOC(e));
}

function _(props: IMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene, doNotAdd } =  props;
    useEffect(() => {
        let obj = new BabylonMaterial(name, scene, doNotAdd);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PMaterial = buildExtends<IMaterialProps & IMaterialParams>(_);