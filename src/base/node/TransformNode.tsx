import { TransformNode as BabylonTransformNode, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from './Node';

export type ITransformNodeProps = IComponentProps & {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    isPure?: boolean
}

export type ITransformNodeParams = {

}

export function TransformNodeHOC(EL: React.FC) {
    return (props: ITransformNodeParams) => {
        return <EL {...props}/>
    }
}

function _(props: ITransformNodeProps) {
    const { init, scene, name, isPure } = props;
    useEffect(() => {
        let obj = new BabylonTransformNode(name, scene, isPure);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTransformNode = getEL<ITransformNodeParams>(_, [
    TransformNodeHOC,
    NodeHOC,
    ComponentHOC
]);