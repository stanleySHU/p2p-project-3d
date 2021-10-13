import { INodeMaterialOptions, NodeMaterial as BabylonNodeMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MaterialHOC } from './Material';
import { PushMaterialHOC } from './PushMaterial';

export type INodeMaterialProps = IComponentProps & {
    name: string, 
    scene?: BabylonScene, 
    options?: Partial<INodeMaterialOptions>
}

export type INodeMaterialParams = {

}

function NodeMaterialHOC(EL: React.FC) {
    return (props: INodeMaterialParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: INodeMaterialProps) {
    const { init, name, scene, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonNodeMaterial(name, scene, options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PNodeMaterial = getEL<INodeMaterialParams>(_, [
    NodeMaterialHOC,
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);