import { PredicateCondition as BabylonPredicateCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IConditionInitial, buildExtends as _buildExtends } from './Condition';

export type IPredicateConditionInitial<T> = IConditionInitial<T> & {
    predicate: () => boolean
};
export type IPredicateConditionProps = IPredicateConditionInitial<BabylonPredicateCondition>;

function PredicateConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IPredicateConditionProps) => {
        const { instance, name, actionManager, predicate } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonPredicateCondition(actionManager, predicate);
                console.log(`PredicateCondition ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(PredicateConditionHOC(e));
}

export const P2PPredicateCondition = buildExtends<IPredicateConditionProps>(ChildHOC(null));

export type IPredicateConditionOptions = {};