import { ScrollBar as BabylonScrollBar} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './BaseSlider'

export type IScrollBarProps = {
    name?: string | undefined
}

export type IScrollBarParams = {

}

function ScrollBarHOC<T>(EL: React.FC<T>) {
    return (props: T & IScrollBarParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ScrollBarHOC(e));
}

function _(props: IScrollBarProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonScrollBar(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PScrollBar = buildExtends<IScrollBarProps & IScrollBarParams>(_); 