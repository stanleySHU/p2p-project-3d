import { ColorPicker as BabylonColorPicker} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IColorPickerProps = IComponentProps<BabylonColorPicker> & {
    name?: string 
}

export type IColorPickerParams = {

}

function ColorPickerHOC(EL: React.FC) {
    return (props: IColorPickerParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ColorPickerHOC(e));
}

function _(props: IColorPickerProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonColorPicker(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PColorPicker = buildExtends<IColorPickerProps & IColorPickerParams>(_); 