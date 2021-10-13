import { BaseSlider as BabylonBaseSlider} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IBaseSliderProps = IComponentProps & {
    name?: string 
}

export type IBaseSliderParams = {

}

export function BaseSliderHOC(EL: React.FC) {
    return (props: IBaseSliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IBaseSliderProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonBaseSlider(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBaseSlider = getEL<IBaseSliderParams>(_, [
    BaseSliderHOC,
    ControlHOC,
    ComponentHOC
])