import { ColorPicker as BabylonColorPicker} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IColorPickerProps = IComponentProps<BabylonColorPicker> & {
    name?: string 
}

export type IColorPickerParams = IControlParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonColorPicker(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PColorPicker = buildExtends<IColorPickerProps & IColorPickerParams>(_); 