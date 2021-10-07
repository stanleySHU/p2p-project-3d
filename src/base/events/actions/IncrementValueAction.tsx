import { IncrementValueAction as BabylonIncrementValueAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IIncrementValueActionInitial<T> = IActionInitial<T> & {
    target: any, 
    propertyPath: string, 
    value: any
};
export type IIncrementValueActionProps = IIncrementValueActionInitial<BabylonIncrementValueAction>;

function IncrementValueActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IIncrementValueActionProps) => {
        const { instance, name, triggerOptions, target, propertyPath, value, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonIncrementValueAction(triggerOptions, target, propertyPath, value, condition);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(IncrementValueActionHOC(e));
}

export const P2PIncrementValueAction = buildExtends<IIncrementValueActionProps>(ChildHOC(null));

export type IIncrementValueActionOptions = {};
