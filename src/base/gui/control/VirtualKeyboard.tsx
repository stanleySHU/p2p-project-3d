import { VirtualKeyboard as BabylonVirtualKeyboard} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './StackPanel'

export type IVirtualKeyboardProps = IComponentProps<BabylonVirtualKeyboard>  & {
    name?: string 
}

export type IVirtualKeyboardParams = {

}

function VirtualKeyboardHOC(EL: React.FC) {
    return (props: IVirtualKeyboardParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VirtualKeyboardHOC(e));
}

function _(props: IVirtualKeyboardProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonVirtualKeyboard(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVirtualKeyboard = buildExtends<IVirtualKeyboardProps & IVirtualKeyboardParams>(_); 