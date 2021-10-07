import { ImageScrollBar as BabylonImageScrollBar} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './BaseSlider'

export type IImageScrollBarProps = {
    name?: string | undefined
}

export type IImageScrollBarParams = {

}

function ImageScrollBarHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageScrollBarParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageScrollBarHOC(e));
}

function _(props: IImageScrollBarProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonImageScrollBar(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PImageScrollBar = buildExtends<IImageScrollBarProps & IImageScrollBarParams>(_); 