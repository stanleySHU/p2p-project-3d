import { VirtualKeyboard as BabylonVirtualKeyboard} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './StackPanel'

export type IVirtualKeyboardProps = {
    name?: string | undefined
}

export type IVirtualKeyboardParams = {

}

function VirtualKeyboardHOC<T>(EL: React.FC<T>) {
    return (props: T & IVirtualKeyboardParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VirtualKeyboardHOC(e));
}

function _(props: IVirtualKeyboardProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonVirtualKeyboard(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PVirtualKeyboard = buildExtends<IVirtualKeyboardProps & IVirtualKeyboardParams>(_); 