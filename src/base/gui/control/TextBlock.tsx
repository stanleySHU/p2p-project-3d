import { TextBlock as BabylonTextBlock} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type ITextBlockProps = IComponentProps<BabylonTextBlock> & {
    name?: string,
    text?: string
}

export type ITextBlockParams = {

}

function TextBlockHOC(EL: React.FC) {
    return (props: ITextBlockParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextBlockHOC(e));
}

function _(props: ITextBlockProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonTextBlock(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTextBlock = buildExtends<ITextBlockProps & ITextBlockParams>(_); 