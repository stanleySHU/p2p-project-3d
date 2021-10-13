import { Observable, Vector2 } from '@babylonjs/core';
import { Control as BabylonControl, Control, Style, Vector2WithInfo} from '@babylonjs/gui';
import React, { useContext, useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IControlProps = IComponentProps & {
    name?: string 
}

export type IControlParams = {
    onPointerMoveObservable?: Observable<Vector2>;
    onPointerEnterObservable?: Observable<Control>;
    onPointerOutObservable?: Observable<Control>;
    onPointerDownObservable?: Observable<Vector2WithInfo>;
    onPointerUpObservable?: Observable<Vector2WithInfo>;
    onPointerClickObservable?: Observable<Vector2WithInfo>;
    verticalAlignment?: 0 | 1 | 2,  //left, right or center
    horizontalAlignment?: 0 | 1 | 2 //top, bottom and center
    top?: number;      //0
    left?: number;      //0
    width?: number;         //100%
    height?: number;        //100%,
    paddingTop?: number;      //0
    paddingBottom?: number;      //0
    paddingLeft?: number;
    paddingRight?: number;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    transformCenterX?: number;
    transformCenterY?: number;
    color?: string;
    style?: Style;
}

export function ControlHOC(EL: React.FC<IControlParams>) {
    return (props: IControlParams) => {
        const { instance, parentInstance } = props as any;
        useEffect(() => {
            if (instance && parentInstance.addControl) parentInstance.addControl(instance);
            return () => {
                if (instance && parentInstance.removeControl) {
                    parentInstance.removeControl(instance);
                    instance.dispose();
                }
            }
        }, [instance]);
        useEffect(() => {
            if (instance) instance.top = (props.top || 0);
        }, [props.top, instance])
        useEffect(() => {
            if (instance) instance.left = (props.left || 0);
        }, [props.left, instance])
        useEffect(() => {
            if (instance && props.width && parentInstance) instance.width = props.width;
        }, [props.width, instance])
        useEffect(() => {
            if (instance && props.height && parentInstance) instance.height = props.height;
        }, [props.height, instance])
        useEffect(() => {
            if (instance) instance.verticalAlignment = props.verticalAlignment || BabylonControl.VERTICAL_ALIGNMENT_TOP;
        }, [props.verticalAlignment, instance])
        useEffect(() => {
            if (instance) instance.horizontalAlignment = props.horizontalAlignment || BabylonControl.HORIZONTAL_ALIGNMENT_LEFT;
        }, [props.horizontalAlignment, instance])
        useEffect(() => {
            if (instance) instance.color = props.color || 'transparent';
        }, [props.color, instance])      
        useEffect(() => {
            if (instance && props.style) instance.style = props.style;
        }, [props.style, instance]);  
        return <EL {...props}/>
    }
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