import { TextBlock as BabylonTextBlock} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import {  ControlHOC, IControlParams } from './Control'

export type ITextBlockProps = IComponentProps & {
    name?: string,
    text?: string
}

export type ITextBlockParams = {
    text?: string,
    color?: string
}

function TextBlockHOC(EL: React.FC<ITextBlockParams>) {
    return (props: ITextBlockParams) => {
        const { instance } = props as any;
        useEffect(() => {
            if (instance) instance.text = props.text || '';
        }, [props.text, instance]);
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