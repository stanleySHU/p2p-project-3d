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
            if (instance && !instance.current) {
                instance.current = new BabylonColorPicker(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ColorPickerHOC(e));
}

export const P2PColorPicker = buildExtends<IColorPickerProps>(ChildHOC(null));