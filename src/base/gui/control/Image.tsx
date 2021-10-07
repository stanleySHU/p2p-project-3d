import { Image as BabylonImage} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IImageProps = {
    name?: string | undefined
}

export type IImageParams = {

}

function ImageHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageHOC(e));
}

function _(props: IImageProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonImage(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PImage = buildExtends<IImageProps & IImageParams>(_); 