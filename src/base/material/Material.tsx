import { Material as BabylonMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../Component'

export type IMaterialProps = IComponentProps<BabylonMaterial> & {
    name: string, 
    scene: BabylonScene, 
    doNotAdd?: boolean
}

export type IMaterialParams = {

}

function MaterialHOC(EL: React.FC) {
    return (props: IMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MaterialHOC(e));
}

function _(props: IMaterialProps) {
    const { init, name, scene, doNotAdd } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonMaterial(name, scene, doNotAdd);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMaterial = buildExtends<IMaterialProps & IMaterialParams>(_);