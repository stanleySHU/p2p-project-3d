import { Action as BabylonAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IActionProps = IComponentProps<BabylonAction> & {
    triggerOptions: any, 
    condition?: Condition
}

export type IActionParams = {

}

function ActionHOC(EL: React.FC) {
    return (props: IActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ActionHOC(e));
}

function _(props: IActionProps) {
    const { init, triggerOptions, condition } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonAction(triggerOptions, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAction = buildExtends<IActionProps & IActionParams>(_);