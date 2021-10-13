import { ScrollViewer as BabylonScrollViewer} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC } from './Container';
import { ControlHOC } from './Control';
import { IRectangleParams, RectangleHOC } from './Rectangle'

export type IScrollViewerProps = IComponentProps & {
    name?: string 
}

export type IScrollViewerParams = {

}

function ScrollViewerHOC(EL: React.FC) {
    return (props: IScrollViewerParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IScrollViewerProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonScrollViewer(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PScrollViewer = getEL<IScrollViewerParams>(_, [
    ScrollViewerHOC,
    RectangleHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])