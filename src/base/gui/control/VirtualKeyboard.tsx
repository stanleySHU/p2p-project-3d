import { VirtualKeyboard as BabylonVirtualKeyboard } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IStackPanelInitial, buildExtends as _buildExtends } from './StackPanel';

export type IVirtualKeyboardInitial<T> = IStackPanelInitial<T> & {}
export type IVirtualKeyboardProps = IVirtualKeyboardInitial<BabylonVirtualKeyboard>;

export function VirtualKeyboardHOC<T>(EL: React.FC<T>) {
    return (props: T & IVirtualKeyboardProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`VirtualKeyboard ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonVirtualKeyboard(name);
                console.log(`VirtualKeyboard ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(VirtualKeyboardHOC(e));
}

export const P2PVirtualKeyboard = buildExtends(ChildHOC(null));