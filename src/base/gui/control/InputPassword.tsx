import { InputPassword as BabylonInputPassword} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IInputTextParams } from './InputText'

export type IInputPasswordProps = IComponentProps<BabylonInputPassword> & {
    name?: string,
    text?: string
}

export type IInputPasswordParams = IInputTextParams & {

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
    const { init, name, text } = props;
    useLayoutEffect(() => {
        let obj = new BabylonInputPassword(name, text);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInputPassword = buildExtends<IInputPasswordProps & IInputPasswordParams>(_); 