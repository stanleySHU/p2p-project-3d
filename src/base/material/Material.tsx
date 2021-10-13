import { Material as BabylonMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component'

export type IMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene, 
    doNotAdd?: boolean
}

export type IMaterialParams = {

}

export function MaterialHOC(EL: React.FC) {
    return (props: IMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IMaterialProps) {
    const { init, name, scene, doNotAdd } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonMaterial(name, scene, doNotAdd);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMaterial = getEL<IMaterialParams>(_, [
    MaterialHOC,
    ComponentHOC
]);