import { ScrollBar as BabylonScrollBar} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { BaseSliderHOC, IBaseSliderParams } from './BaseSlider'
import { ControlHOC } from './Control';

export type IScrollBarProps = IComponentProps & {
    name?: string
}

export type IScrollBarParams = {

}

function ScrollBarHOC(EL: React.FC) {
    return (props: IScrollBarParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IScrollBarProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonScrollBar(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PScrollBar = getEL<IScrollBarParams>(_, [
    ScrollBarHOC,
    BaseSliderHOC,
    ControlHOC,
    ComponentHOC
])