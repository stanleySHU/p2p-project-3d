import { PBRSpecularGlossinessMaterial as BabylonPBRSpecularGlossinessMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './PBRBaseSimpleMaterial'

export type IPBRSpecularGlossinessMaterialProps = {
    name: string, 
    scene: BabylonScene
}

export type IPBRSpecularGlossinessMaterialParams = {

}

function PBRSpecularGlossinessMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IPBRSpecularGlossinessMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRSpecularGlossinessMaterialHOC(e));
}

function _(props: IPBRSpecularGlossinessMaterialProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene } =  props;
    useEffect(() => {
        let obj = new BabylonPBRSpecularGlossinessMaterial(name, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPBRSpecularGlossinessMaterial = buildExtends<IPBRSpecularGlossinessMaterialProps & IPBRSpecularGlossinessMaterialParams>(_);