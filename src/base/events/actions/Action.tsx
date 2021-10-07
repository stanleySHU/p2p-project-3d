import { Action as BabylonAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IActionInitial<T> = IComponentProps<T> & {
    triggerOptions: any,
    condition?: Condition
};
export type IActionProps = IActionInitial<BabylonAction>;

function ActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IActionProps) => {
        const { instance, name, triggerOptions, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonAction(triggerOptions, condition);
            }
        }, []);
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ActionHOC(e));
}

export const P2PAction = buildExtends<IActionProps>(ChildHOC(null));

export type IActionOptions = {};

