import { DoNothingAction as BabylonDoNothingAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IDoNothingActionProps = IComponentProps<BabylonDoNothingAction> & {
    triggerOptions?: any, 
    condition?: Condition
}

export type IDoNothingActionParams = {

}

function DoNothingActionHOC(EL: React.FC) {
    return (props: IDoNothingActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DoNothingActionHOC(e));
}

function _(props: IDoNothingActionProps) {
    const { init, triggerOptions, condition } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonDoNothingAction(triggerOptions, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDoNothingAction = buildExtends<IDoNothingActionProps & IDoNothingActionParams>(_);