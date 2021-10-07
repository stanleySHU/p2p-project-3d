import { StateCondition as BabylonStateCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IConditionInitial, buildExtends as _buildExtends } from './Condition';

export type IStateConditionInitial<T> = IConditionInitial<T> & {
    target: any, 
    value: string
};
export type IStateConditionProps = IStateConditionInitial<BabylonStateCondition>;

function StateConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IStateConditionProps) => {
        const { instance, name, actionManager, target, value } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonStateCondition(actionManager, target, value );
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(StateConditionHOC(e));
}

export const P2PStateCondition = buildExtends<IStateConditionProps>(ChildHOC(null));

export type IStateConditionOptions = {};