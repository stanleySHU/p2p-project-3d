import { SwitchBooleanAction as BabylonSwitchBooleanAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type ISwitchBooleanActionInitial<T> = IActionInitial<T> & {
    target: any, 
    propertyPath: string
};
export type ISwitchBooleanActionProps = ISwitchBooleanActionInitial<BabylonSwitchBooleanAction>;

function SwitchBooleanActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISwitchBooleanActionProps) => {
        const { instance, name, triggerOptions, target, propertyPath, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonSwitchBooleanAction(triggerOptions, target, propertyPath, condition);
                console.log(`SwitchBooleanAction ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(SwitchBooleanActionHOC(e));
}

export const P2PSwitchBooleanAction = buildExtends<ISwitchBooleanActionProps>(ChildHOC(null));

export type ISwitchBooleanActionOptions = {};