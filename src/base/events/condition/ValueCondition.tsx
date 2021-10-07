import { ValueCondition as BabylonValueCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IConditionInitial, buildExtends as _buildExtends } from './Condition';

export type IValueConditionInitial<T> = IConditionInitial<T> & {
    target: any, 
    propertyPath: string, 
    value: any, 
    operator?: number
};
export type IValueConditionProps = IValueConditionInitial<BabylonValueCondition>;

function ValueConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IValueConditionProps) => {
        const { instance, name, actionManager, target, propertyPath, value, operator } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonValueCondition(actionManager, target, propertyPath, value, operator);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(ValueConditionHOC(e));
}

export const P2PValueCondition = buildExtends<IValueConditionProps>(ChildHOC(null));

export type IValueConditionOptions = {};