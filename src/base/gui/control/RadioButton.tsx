import { RadioButton as BabylonRadioButton } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IRadioButtonInitial<T> = IControlInitial<T> & {}
export type IRadioButtonProps = IRadioButtonInitial<BabylonRadioButton>;

export function RadioButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IRadioButtonProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`RadioButton ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonRadioButton(name);
                console.log(`RadioButton ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(RadioButtonHOC(e));
}

export const P2PRadioButton = buildExtends(ChildHOC(null));