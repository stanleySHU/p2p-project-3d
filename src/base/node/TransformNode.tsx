import { TransformNode as BabylonTransformNode, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { newChildren } from '../ComponentRedux';
import { buildExtends as _buildExtends } from './Node';

export type ITransformNodeProps = IComponentProps<BabylonTransformNode> & {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    isPure?: boolean
}

export type ITransformNodeParams = {

}

function TransformNodeHOC(EL: React.FC) {
    return (props: ITransformNodeParams) => {
        useEffect(() => {
            
        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TransformNodeHOC(e))
}

function _(props: ITransformNodeProps) {
    const { instance, scene, name, isPure } = props;
    useEffect(() => {
        instance!.current = new BabylonTransformNode(name, scene, isPure);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTransformNode = buildExtends<ITransformNodeProps & ITransformNodeParams>(_);