import { TextBlock as BabylonTextBlock} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type ITextBlockProps = IComponentProps<BabylonTextBlock> & {
    name?: string,
    text?: string
}

export type ITextBlockParams<T> = IControlParams<T> & {
    text?: string,
    color?: string
}

function TextBlockHOC(EL: React.FC) {
    return (props: ITextBlockParams<BabylonTextBlock>) => {
        const { instance } = props;
        useEffect(() => {
            if (instance) instance.text = props.text || '';
        }, [props.text, instance]);
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextBlockHOC(e));
}

function _(props: ITextBlockProps) {
    const { init, name, text } = props;
    useLayoutEffect(() => {
        let obj = new BabylonTextBlock(name, text);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTextBlock = buildExtends<ITextBlockProps & ITextBlockParams<BabylonTextBlock>>(_); 