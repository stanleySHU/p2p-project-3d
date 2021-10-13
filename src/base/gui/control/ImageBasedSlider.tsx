import { ImageBasedSlider as BabylonImageBasedSlider} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { BaseSliderHOC, IBaseSliderParams } from './BaseSlider'
import { ControlHOC } from './Control';

export type IImageBasedSliderProps = IComponentProps & {
    name?: string
}

export type IImageBasedSliderParams = {

}

function ImageBasedSliderHOC(EL: React.FC) {
    return (props: IImageBasedSliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IImageBasedSliderProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImageBasedSlider(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImageBasedSlider = getEL<IImageBasedSliderParams>(_, [
    ImageBasedSliderHOC,
    BaseSliderHOC,
    ControlHOC,
    ComponentHOC
])