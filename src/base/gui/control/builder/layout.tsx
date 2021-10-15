import { Control } from "@babylonjs/gui";
import { useEffect } from "react";
import { isAllPresent } from "../../../../utils/lang";



export type ILayoutParams = {
    verticalAlignment?: 0 | 1 | 2,  //left, right or center
    horizontalAlignment?: 0 | 1 | 2 //top, bottom and center

    top?: number | string;      //0
    left?: number | string;      //0
    width?: number | string;         //100%
    height?: number | string;        //100%,

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
}

export function LayoutHoc(EL: React.FC<ILayoutParams>) {
    return (props: ILayoutParams) => {
        const instance:Control = (props as any).instance;
        const {
            verticalAlignment, horizontalAlignment,
            top, left, width, height,
            paddingTop, paddingLeft, paddingBottom, paddingRight,
            rotation, scaleX, scaleY, transformCenterX, transformCenterY,
            color
         } = props;
        useEffect(() => {
            isAllPresent(instance) && (instance.verticalAlignment = props.verticalAlignment || Control.VERTICAL_ALIGNMENT_TOP);
        }, [instance, verticalAlignment]);
        useEffect(() => {
            isAllPresent(instance) && (instance.horizontalAlignment = props.horizontalAlignment || Control.HORIZONTAL_ALIGNMENT_LEFT);
        }, [instance, horizontalAlignment]);

        useEffect(() => {
            isAllPresent(instance, top) && (instance.top = props.top);
        }, [instance, top]);
        useEffect(() => {
            isAllPresent(instance, left) && (instance.left = props.left);
        }, [instance, left]);
        useEffect(() => {
            isAllPresent(instance, width) && (instance.width = props.width);
        }, [instance, width]);
        useEffect(() => {
            isAllPresent(instance, height) && (instance.height = props.height);
        }, [instance, height]);

        useEffect(() => {
            isAllPresent(instance, paddingTop) && (instance.paddingTop = props.paddingTop);
        }, [instance, paddingTop]);
        useEffect(() => {
            isAllPresent(instance, paddingLeft) && (instance.paddingLeft = props.paddingLeft);
        }, [instance, paddingLeft]);
        useEffect(() => {
            isAllPresent(instance, paddingBottom) && (instance.paddingBottom = props.paddingBottom);
        }, [instance, paddingBottom]);
        useEffect(() => {
            isAllPresent(instance, paddingRight) && (instance.paddingRight = props.paddingRight);
        }, [instance, paddingRight]);

        useEffect(() => {
            isAllPresent(instance, rotation) && (instance.rotation = props.rotation);
        }, [instance, rotation]);
        useEffect(() => {
            isAllPresent(instance, scaleX) && (instance.scaleX = props.scaleX);
        }, [instance, scaleX]);
        useEffect(() => {
            isAllPresent(instance, scaleY) && (instance.scaleY = props.scaleY);
        }, [instance, scaleY]);
        useEffect(() => {
            isAllPresent(instance, transformCenterX) && (instance.transformCenterX = props.transformCenterX);
        }, [instance, transformCenterX]);
        useEffect(() => {
            isAllPresent(instance, transformCenterY) && (instance.transformCenterY = props.transformCenterY);
        }, [instance, transformCenterY]);
        return <EL {...props}/>
    }
}