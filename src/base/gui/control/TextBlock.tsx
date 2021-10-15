import { TextBlock as BabylonTextBlock} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { isAllPresent } from '../../../utils/lang';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import {  ControlHOC, IControlParams } from './Control'

export type ITextBlockProps = IComponentProps & {
    name?: string,
    text?: string
}

export type ITextBlockParams = {
    text?: string,
    outlineWidth?: number,
    outlineColor?: string,
    textHorizontalAlignment?: 0 | 1 | 2,    //left, right or center
    textVerticalAlignment?: 0 | 1 | 2       //top, bottom or center
}

function TextBlockHOC(EL: React.FC<ITextBlockParams>) {
    return (props: ITextBlockParams) => {
        const instance: BabylonTextBlock = (props as any).instance;
        const { text, outlineWidth, outlineColor, textVerticalAlignment, textHorizontalAlignment } = props;
        useEffect(() => {
            isAllPresent(instance, text) && (instance.text = text);
        }, [text, instance]);
        useEffect(() => {
            isAllPresent(instance, outlineWidth) && (instance.outlineWidth = outlineWidth);
        }, [outlineWidth, instance]);
        useEffect(() => {
            isAllPresent(instance, outlineColor) && (instance.outlineColor = outlineColor);
        }, [outlineColor, instance]);
        useEffect(() => {
            isAllPresent(instance, textVerticalAlignment) && (instance.textVerticalAlignment = textVerticalAlignment);
        }, [textVerticalAlignment, instance]);
        useEffect(() => {
            isAllPresent(instance, textHorizontalAlignment) && (instance.textHorizontalAlignment = textHorizontalAlignment);
        }, [textHorizontalAlignment, instance]);
        return <EL {...props}/>
    }
}

function _(props: ITextBlockProps) {
    const { init, name, text } = props;
    useLayoutEffect(() => {
        let obj = new BabylonTextBlock(name, text);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTextBlock = getEL<IControlParams & ITextBlockParams & ITextBlockProps>(_, [
    TextBlockHOC,
    ControlHOC,
    ComponentHOC
])