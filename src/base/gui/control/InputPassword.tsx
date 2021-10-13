import { InputPassword as BabylonInputPassword} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC } from './Control';
import { IInputTextParams, InputTextHOC } from './InputText'

export type IInputPasswordProps = IComponentProps & {
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

function _(props: IInputPasswordProps) {
    const { init, name, text } = props;
    useLayoutEffect(() => {
        let obj = new BabylonInputPassword(name, text);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInputPassword = getEL<IInputPasswordParams>(_, [
    InputPasswordHOC,
    InputTextHOC,
    ControlHOC,
    ComponentHOC
])