import { ActionManager, Condition as BabylonCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IConditionInitial<T> = IComponentProps<T> & {
    actionManager: ActionManager
};
export type IConditionProps = IConditionInitial<BabylonCondition>;

function ConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IConditionProps) => {
        const { instance, name, actionManager } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonCondition(actionManager);
                console.log(`Condition ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ConditionHOC(e));
}

export const P2PCondition = buildExtends<IConditionProps>(ChildHOC(null));

export type IConditionOptions = {};

