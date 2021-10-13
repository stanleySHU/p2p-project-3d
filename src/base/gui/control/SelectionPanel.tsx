import { SelectionPanel as BabylonSelectionPanel, SelectorGroup} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC } from './Container';
import { ControlHOC } from './Control';
import { IRectangleParams, RectangleHOC } from './Rectangle'

export type ISelectionPanelProps = IComponentProps & {
    name: string,
    groups?: SelectorGroup[]
}

export type ISelectionPanelParams = {

}

function SelectionPanelHOC(EL: React.FC) {
    return (props: ISelectionPanelParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ISelectionPanelProps) {
    const { init, name, groups } = props;
    useLayoutEffect(() => {
        let obj = new BabylonSelectionPanel(name, groups);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSelectionPanel = getEL<ISelectionPanelParams>(_, [
    SelectionPanelHOC,
    RectangleHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])