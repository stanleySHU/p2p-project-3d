import { InputText as BabylonInputText} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IInputTextProps = IComponentProps & {
    name?: string,
    text?: string
}

export type IInputTextParams = {

}

export function InputTextHOC(EL: React.FC) {
    return (props: IInputTextParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}
function _(props: IInputTextProps) {
    const { init, name, text } = props;
    useLayoutEffect(() => {
        let obj = new BabylonInputText(name, text);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInputText = getEL<IInputTextParams>(_, [
    InputTextHOC,
    ControlHOC,
    ComponentHOC
])