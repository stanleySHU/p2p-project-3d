import { BouncingBehavior as BabylonBouncingBehavior } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IBouncingBehaviorProps = IComponentProps<BabylonBouncingBehavior> & {}

export type IBouncingBehaviorParams = {

}

function BouncingBehaviorHOC(EL: React.FC) {
    return (props: IBouncingBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BouncingBehaviorHOC(e));
}

function _(props: IBouncingBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonBouncingBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBouncingBehavior = buildExtends<IBouncingBehaviorProps & IBouncingBehaviorParams>(_);