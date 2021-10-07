import { InputPassword as BabylonInputPassword} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './InputText'

export type IInputPasswordProps = {
    name?: string,
    text?: string
}

export type IInputPasswordParams = {

}

function InputPasswordHOC<T>(EL: React.FC<T>) {
    return (props: T & IInputPasswordParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InputPasswordHOC(e));
}

function _(props: IInputPasswordProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, text } = props;
    useEffect(() => {
        let obj = new BabylonInputPassword(name, text);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PInputPassword = buildExtends<IInputPasswordProps & IInputPasswordParams>(_); 