import { SetValueAction as BabylonSetValueAction } from '@babylonjs/core'; 
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type ISetValueActionInitial<T> = IActionInitial<T> & {
    target: any, 
    propertyPath: string, 
    value: any
};
export type ISetValueActionProps = ISetValueActionInitial<BabylonSetValueAction>;

function SetValueActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISetValueActionProps) => {
        const { instance, name, triggerOptions, target, propertyPath, value, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonSetValueAction(triggerOptions, target, propertyPath, value, condition);
                console.log(`SetValueAction ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetValueActionHOC(e));
}

export const P2PSetValueAction = buildExtends<ISetValueActionProps>(ChildHOC(null));

export type ISetValueActionOptions = {};