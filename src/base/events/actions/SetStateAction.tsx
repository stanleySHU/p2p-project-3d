import { SetStateAction as BabylonSetStateAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type ISetStateActionInitial<T> = IActionInitial<T> & {
    target: any, 
    value: string
};
export type ISetStateActionProps = ISetStateActionInitial<BabylonSetStateAction>;

function SetStateActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISetStateActionProps) => {
        const { instance, name, triggerOptions, target, value, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonSetStateAction(triggerOptions, target, value, condition);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetStateActionHOC(e));
}

export const P2PSetStateAction = buildExtends<ISetStateActionProps>(ChildHOC(null));

export type ISetStateActionOptions = {};