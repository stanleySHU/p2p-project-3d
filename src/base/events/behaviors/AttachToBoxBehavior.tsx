import { AttachToBoxBehavior as BabylonAttachToBoxBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IAttachToBoxBehaviorProps = IComponentProps<BabylonAttachToBoxBehavior> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AttachToBoxBehaviorHOC(e));
}

function _(props: IAttachToBoxBehaviorProps) {
    const { init, ui } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAttachToBoxBehavior(ui);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAttachToBoxBehavior = buildExtends<IAttachToBoxBehaviorProps & IAttachToBoxBehaviorParams>(_);