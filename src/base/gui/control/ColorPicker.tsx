import { ColorPicker as BabylonColorPicker} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IColorPickerProps = {
    name?: string | undefined
}

export type IColorPickerParams = {

}

function ColorPickerHOC<T>(EL: React.FC<T>) {
    return (props: T & IColorPickerParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ColorPickerHOC(e));
}

function _(props: IColorPickerProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonColorPicker(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PColorPicker = buildExtends<IColorPickerProps & IColorPickerParams>(_); 