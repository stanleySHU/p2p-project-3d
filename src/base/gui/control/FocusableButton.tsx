import { FocusableButton as BabylonFocusableButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren, getEL, ComponentHOC } from '../../Component';
import { ButtonHOC } from './Button'
import { ContainerHOC } from './Container';
import { ControlHOC } from './Control';
import { RectangleHOC } from './Rectangle'


export type IFocusableButtonProps = IComponentProps & {
    name?: string
}

export type IFocusableButtonParams = {

}

function FocusableButtonHOC(EL: React.FC) {
    return (props: IFocusableButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IFocusableButtonProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonFocusableButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFocusableButton = getEL<IFocusableButtonParams>(_, [
    FocusableButtonHOC,
    ButtonHOC,
    RectangleHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])