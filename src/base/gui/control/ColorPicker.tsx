import { ColorPicker as BabylonColorPicker } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IColorPickerInitial<T> = IControlInitial<T> & {}
export type IColorPickerProps = IColorPickerInitial<BabylonColorPicker>;

export function ColorPickerHOC<T>(EL: React.FC<T>) {
    return (props: T & IColorPickerProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`ColorPicker ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonColorPicker(name);
                console.log(`ColorPicker ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(ColorPickerHOC(e));
}

export const P2PColorPicker = buildExtends(ChildHOC(null));