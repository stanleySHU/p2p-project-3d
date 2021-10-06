import { SetParentAction as BabylonSetParentAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type ISetParentActionInitial<T> = IActionInitial<T> & {
    target: any, 
    parent: any
};
export type ISetParentActionProps = ISetParentActionInitial<BabylonSetParentAction>;

function SetParentActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISetParentActionProps) => {
        const { instance, name, triggerOptions, target, parent, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonSetParentAction(triggerOptions, target, parent, condition);
                console.log(`SetParentAction ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetParentActionHOC(e));
}

export const P2PSetParentAction = buildExtends<ISetParentActionProps>(ChildHOC(null));

export type ISetParentActionOptions = {};

