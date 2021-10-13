import { Checkbox as BabylonCheckbox} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type ICheckboxProps = IComponentProps & {
    name?: string
}

export type ICheckboxParams = {

}

function CheckboxHOC(EL: React.FC) {
    return (props: ICheckboxParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ICheckboxProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonCheckbox(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCheckbox = getEL<ICheckboxParams>(_, [
    CheckboxHOC,
    ControlHOC,
    ComponentHOC
])