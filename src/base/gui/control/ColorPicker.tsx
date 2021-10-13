import { ColorPicker as BabylonColorPicker} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IColorPickerProps = IComponentProps & {
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

function _(props: IColorPickerProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonColorPicker(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PColorPicker = getEL<IColorPickerParams>(_, [
    ColorPickerHOC,
    ControlHOC,
    ComponentHOC
])