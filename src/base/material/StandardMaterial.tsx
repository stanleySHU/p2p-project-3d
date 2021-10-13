import { StandardMaterial as BabylonStandardMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { compileFunction } from 'vm';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MaterialHOC } from './Material';
import { PushMaterialHOC } from './PushMaterial';

export type IStandardMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene
}

export type IStandardMaterialParams = {

}

function StandardMaterialHOC(EL: React.FC) {
    return (props: IStandardMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IStandardMaterialProps) {
    const { init, name, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStandardMaterial(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStandardMaterial = getEL<IStandardMaterialParams>(_, [
    StandardMaterialHOC,
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);