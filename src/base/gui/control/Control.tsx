import { Observable, Observer, Vector2 } from '@babylonjs/core';
import { Control as BabylonControl, Control, Style, Vector2WithInfo} from '@babylonjs/gui';
import React, { useContext, useEffect, useLayoutEffect, useReducer } from 'react';
import { isAllPresent } from '../../../utils/lang';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'
import { IEventParams, EventHoc } from './builder/Event';
import { ILayoutParams, LayoutHoc } from './builder/layout';

export type IControlProps = IComponentProps & {
    name?: string 
}

export type IControlParams = ILayoutParams & IEventParams & {
    color?: string
}

function _ControlHOC(EL: React.FC<IControlParams>) {
    return (props: IControlParams) => {
        const { instance, parentInstance } = props as any;
        useEffect(() => {
            isAllPresent(instance, parentInstance.addControl) && (parentInstance.addControl(instance));
            return () => {
                if (isAllPresent(instance, parentInstance.addControl)) {
                    parentInstance.removeControl(instance);
                    instance.dispose();
                }
            }
        }, [instance]);
        useEffect(() => {
            isAllPresent(instance) && (instance.color = props.color || 'transparent');
        }, [props.color, instance])      
        return <EL {...props}/>
    }
}

export function ControlHOC(EL: any) {
    return getEL(EL, [
        EventHoc,
        LayoutHoc,
        _ControlHOC
    ]);
}

function _(props: IControlProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonControl(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PControl = getEL<IControlParams>(_, [
    ControlHOC,
    ComponentHOC
])