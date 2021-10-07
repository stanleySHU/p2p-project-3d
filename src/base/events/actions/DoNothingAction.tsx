import { DoNothingAction as BabylonDoNothingAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IDoNothingActionInitial<T> = IActionInitial<T> & {};
export type IDoNothingActionProps = IDoNothingActionInitial<BabylonDoNothingAction>;

function DoNothingActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IDoNothingActionProps) => {
        const { instance, name, triggerOptions, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonDoNothingAction(triggerOptions, condition);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(DoNothingActionHOC(e));
}

export const P2PDoNothingAction = buildExtends<IDoNothingActionProps>(ChildHOC(null));

export type IDoNothingActionOptions = {};