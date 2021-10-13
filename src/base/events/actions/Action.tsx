import { Action as BabylonAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IActionProps = IComponentProps & {
    triggerOptions: any, 
    condition?: Condition
}

export type IActionParams = {

}

export function ActionHOC(EL: React.FC) {
    return (props: IActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IActionProps) {
    const { init, triggerOptions, condition } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonAction(triggerOptions, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAction = getEL<IActionParams>(_, [
    ActionHOC,
    ComponentHOC
])