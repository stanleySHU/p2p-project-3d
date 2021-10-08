import { FadeInOutBehavior as BabylonFadeInOutBehavior } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IFadeInOutBehaviorProps = IComponentProps<BabylonFadeInOutBehavior> & {}
export type IFadeInOutBehaviorParams = {

}

function FadeInOutBehaviorHOC(EL: React.FC) {
    return (props: IFadeInOutBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FadeInOutBehaviorHOC(e));
}

function _(props: IFadeInOutBehaviorProps) {
    const { instance } =  props;
    useEffect(() => {
        instance!.current = new BabylonFadeInOutBehavior();
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFadeInOutBehavior = buildExtends<IFadeInOutBehaviorProps & IFadeInOutBehaviorParams>(_);