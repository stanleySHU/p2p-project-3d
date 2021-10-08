import { AutoRotationBehavior as BabylonAutoRotationBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IAutoRotationBehaviorProps = IComponentProps<BabylonAutoRotationBehavior> &  {}

export type IAutoRotationBehaviorParams = {

}

function AutoRotationBehaviorHOC(EL: React.FC) {
    return (props: IAutoRotationBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AutoRotationBehaviorHOC(e));
}

function _(props: IAutoRotationBehaviorProps) {
    const { instance } =  props;
    useEffect(() => {
        instance!.current = new BabylonAutoRotationBehavior();
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAutoRotationBehavior = buildExtends<IAutoRotationBehaviorProps & IAutoRotationBehaviorParams>(_);