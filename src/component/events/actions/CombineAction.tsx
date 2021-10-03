import { Action, CombineAction as BabylonCombineAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type ICombineActionInitial<T> = IActionInitial<T> & {
    children: Action[]
};
export type ICombineActionProps = ICombineActionInitial<BabylonCombineAction>;

function CombineActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ICombineActionProps) => {
        const { instance, name, triggerOptions, children, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonCombineAction(triggerOptions, children, condition);
                console.log(`CombineAction ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(CombineActionHOC(e));
}

export const P2PCombineAction = buildExtends<ICombineActionProps>(ChildHOC(null));

export type ICombineActionOptions = {};

