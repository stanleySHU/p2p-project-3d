import { VirtualKeyboard as BabylonVirtualKeyboard} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IStackPanelParams } from './StackPanel'

export type IVirtualKeyboardProps = IComponentProps<BabylonVirtualKeyboard>  & {
    name?: string 
}

export type IVirtualKeyboardParams = IStackPanelParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonVirtualKeyboard(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVirtualKeyboard = buildExtends<IVirtualKeyboardProps & IVirtualKeyboardParams>(_); 