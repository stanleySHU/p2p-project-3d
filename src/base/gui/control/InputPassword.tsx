import { InputPassword as BabylonInputPassword} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './InputText'

export type IInputPasswordProps = IComponentProps<BabylonInputPassword> & {
    name?: string,
    text?: string
}

export type IInputPasswordParams = {

}

function InputPasswordHOC(EL: React.FC) {
    return (props: IInputPasswordParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InputPasswordHOC(e));
}

function _(props: IInputPasswordProps) {
    const { instance, name, text } = props;
    useEffect(() => {
        instance!.current = new BabylonInputPassword(name, text);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInputPassword = buildExtends<IInputPasswordProps & IInputPasswordParams>(_); 