import { FramingBehavior as BabylonFramingBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IFramingBehaviorProps = IComponentProps<BabylonFramingBehavior> & {}

export type IFramingBehaviorParams = {

}

function FramingBehaviorHOC(EL: React.FC) {
    return (props: IFramingBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FramingBehaviorHOC(e));
}

function _(props: IFramingBehaviorProps) {
    const { instance } =  props;
    useEffect(() => {
        instance!.current = new BabylonFramingBehavior();
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFramingBehavior = buildExtends<IFramingBehaviorProps & IFramingBehaviorParams>(_);