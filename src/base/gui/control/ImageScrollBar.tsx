import { ImageScrollBar as BabylonImageScrollBar} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { BaseSliderHOC, IBaseSliderParams } from './BaseSlider'
import { ControlHOC } from './Control';

export type IImageScrollBarProps = IComponentProps & {
    name?: string 
}

export type IImageScrollBarParams = {

}

function ImageScrollBarHOC(EL: React.FC) {
    return (props: IImageScrollBarParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IImageScrollBarProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImageScrollBar(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImageScrollBar = getEL<IImageScrollBarParams>(_, [
    ImageScrollBarHOC,
    BaseSliderHOC,
    ControlHOC,
    ComponentHOC
])