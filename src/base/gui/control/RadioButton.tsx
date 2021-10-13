import { RadioButton as BabylonRadioButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IRadioButtonProps = IComponentProps& {
    name?: string 
}

export type IRadioButtonParams = {

}

function RadioButtonHOC(EL: React.FC) {
    return (props: IRadioButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IRadioButtonProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonRadioButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRadioButton = getEL<IRadioButtonParams>(_, [
    RadioButtonHOC,
    ControlHOC,
    ComponentHOC
])