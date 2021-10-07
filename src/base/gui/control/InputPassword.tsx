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
            if (instance && !instance.current) {
                instance.current = new BabylonInputPassword(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InputPasswordHOC(e));
}

export const P2PInputPassword = buildExtends<IInputPasswordProps>(ChildHOC(null));