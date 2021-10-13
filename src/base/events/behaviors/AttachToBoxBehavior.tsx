import { AttachToBoxBehavior as BabylonAttachToBoxBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IAttachToBoxBehaviorProps = IComponentProps & {
    ui: TransformNode
}

export type IAttachToBoxBehaviorParams = {

}

function AttachToBoxBehaviorHOC(EL: React.FC) {
    return (props: IAttachToBoxBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IAttachToBoxBehaviorProps) {
    const { init, ui } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAttachToBoxBehavior(ui);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAttachToBoxBehavior = getEL<IAttachToBoxBehaviorParams>(_, [
    AttachToBoxBehaviorHOC,
    ComponentHOC
])