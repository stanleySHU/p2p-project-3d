import { Node as BabylonNode, Scene as BabylonScene } from '@babylonjs/core';
import React, { useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component'

export type INodeProps = IComponentProps & {
    name: string, 
    scene?: Nullable<BabylonScene>
}

export type INodeParams = {}

export function NodeHOC(EL: React.FC) {
    return (props: INodeParams) => {
        return <EL {...props}/>
    }
}

function _(props: INodeProps) {
    const { init, scene, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonNode(name, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PNode = getEL(_, [
    NodeHOC,
    ComponentHOC
]);