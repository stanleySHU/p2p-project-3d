import { InputPassword as BabylonInputPassword } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IInputTextInitial, buildExtends as _buildExtends } from './InputText';

export type IInputPasswordInitial<T> = IInputTextInitial<T> & {}
export type IInputPasswordProps = IInputPasswordInitial<BabylonInputPassword>;

export function InputPasswordHOC<T>(EL: React.FC<T>) {
    return (props: T & IInputPasswordProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`InputPassword ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonInputPassword(name);
                console.log(`InputPassword ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(InputPasswordHOC(e));
}

export const P2PInputPassword = buildExtends(ChildHOC(null));