import { Node as BabylonNode, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../Component'
import { newChildren } from '../ComponentRedux';

export type INodeProps = IComponentProps<BabylonNode> & {
    name: string, 
    scene?: Nullable<BabylonScene>
}

export type INodeParams = {

}

function NodeHOC(EL: React.FC) {
    return (props: INodeParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NodeHOC(e));
}

function _(props: INodeProps) {
    const { instance, scene, name } = props;
    useEffect(() => {
        instance!.current = new BabylonNode(name, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PNode = buildExtends<INodeProps & INodeParams>(_); 