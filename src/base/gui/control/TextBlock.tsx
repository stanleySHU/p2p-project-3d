import { TextBlock as BabylonTextBlock} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type ITextBlockProps = {
    name?: string | undefined
}

export type ITextBlockParams = {

}

function TextBlockHOC<T>(EL: React.FC<T>) {
    return (props: T & ITextBlockParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextBlockHOC(e));
}

function _(props: ITextBlockProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonTextBlock(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTextBlock = buildExtends<ITextBlockProps & ITextBlockParams>(_); 