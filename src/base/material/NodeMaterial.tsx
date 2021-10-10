import { INodeMaterialOptions, NodeMaterial as BabylonNodeMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './PushMaterial'

export type INodeMaterialProps = IComponentProps<BabylonNodeMaterial> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NodeMaterialHOC(e));
}

function _(props: INodeMaterialProps) {
    const { init, name, scene, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonNodeMaterial(name, scene, options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PNodeMaterial = buildExtends<INodeMaterialProps & INodeMaterialParams>(_);