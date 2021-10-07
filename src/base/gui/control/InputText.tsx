import { InputText as BabylonInputText } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IInputTextInitial<T> = IControlInitial<T> & {
    text?: string
}
export type IInputTextProps = IInputTextInitial<BabylonInputText>;

export function InputTextHOC<T>(EL: React.FC<T>) {
    return (props: T & IInputTextProps) => {
        const { instance, name, text } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonInputText(name, text);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InputTextHOC(e));
}

export const P2PInputText = buildExtends<IInputTextProps>(ChildHOC(null));