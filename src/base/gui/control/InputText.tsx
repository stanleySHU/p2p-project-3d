import { InputText as BabylonInputText} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IInputTextProps = {
    name?: string | undefined,
    text?: string
}

export type IInputTextParams = {

}

function InputTextHOC<T>(EL: React.FC<T>) {
    return (props: T & IInputTextParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InputTextHOC(e));
}

function _(props: IInputTextProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, text } = props;
    useEffect(() => {
        let obj = new BabylonInputText(name, text);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PInputText = buildExtends<IInputTextProps & IInputTextParams>(_); 