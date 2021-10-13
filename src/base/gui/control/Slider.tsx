import { Slider as BabylonSlider} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { BaseSliderHOC, IBaseSliderParams } from './BaseSlider'
import { ControlHOC } from './Control';

export type ISliderProps = IComponentProps & {
    name?: string
}

export type ISliderParams = {

}

function SliderHOC(EL: React.FC) {
    return (props: ISliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ISliderProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonSlider(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSlider = getEL<ISliderParams>(_, [
    SliderHOC,
    BaseSliderHOC,
    ControlHOC,
    ComponentHOC
])