import { Checkbox as BabylonCheckbox } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type ICheckboxInitial<T> = IControlInitial<T> & {}
export type ICheckboxProps = ICheckboxInitial<BabylonCheckbox>;

export function CheckboxHOC<T>(EL: React.FC<T>) {
    return (props: T & ICheckboxProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`Checkbox ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonCheckbox(name);
                console.log(`Checkbox ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(CheckboxHOC(e));
}

export const P2PCheckbox = buildExtends(ChildHOC(null));