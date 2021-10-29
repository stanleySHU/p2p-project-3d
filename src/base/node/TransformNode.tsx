import { TransformNode as BabylonTransformNode, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { INodeParams, NodeHOC } from './Node';
import { LayoutHoc, ILayoutParams } from './builder/layout';

export type ITransformNodeProps = IComponentProps & {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    isPure?: boolean
}

export type ITransformNodeParams = ILayoutParams & {

}

function _TransformNodeHOC(EL: React.FC<ITransformNodeParams>) {
    return (props: ITransformNodeParams) => {
        return <EL {...props}/>
    }
}

export function TransformNodeHOC(EL) {
    return getEL(EL, [
        _TransformNodeHOC,
        LayoutHoc
    ]);
}

function _(props: ITransformNodeProps) {
    const { init, scene, name, isPure } = props;
    useEffect(() => {
        let obj = new BabylonTransformNode(name, scene, isPure);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTransformNode = getEL<INodeParams & ITransformNodeParams & IComponentProps>(_, [
    TransformNodeHOC,
    NodeHOC,
    ComponentHOC
]);