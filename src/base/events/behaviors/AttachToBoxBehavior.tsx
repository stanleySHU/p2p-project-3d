import { AttachToBoxBehavior as BabylonAttachToBoxBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IAttachToBoxBehaviorProps = {
    ui: TransformNode
}

export type IAttachToBoxBehaviorParams = {

}

function AttachToBoxBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IAttachToBoxBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AttachToBoxBehaviorHOC(e));
}

function _(props: IAttachToBoxBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { ui } =  props;
    useEffect(() => {
        let obj = new BabylonAttachToBoxBehavior(ui);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PAttachToBoxBehavior = buildExtends<IAttachToBoxBehaviorProps & IAttachToBoxBehaviorParams>(_);