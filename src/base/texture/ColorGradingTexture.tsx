import { ColorGradingTexture as BabylonColorGradingTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './BaseTexture'

export type IColorGradingTextureProps = {
    url: string, 
    sceneOrEngine: BabylonScene | ThinEngine, 
    onLoad?: Nullable<() => void>
}

export type IColorGradingTextureParams = {

}

function ColorGradingTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IColorGradingTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ColorGradingTextureHOC(e));
}

function _(props: IColorGradingTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { url, sceneOrEngine, onLoad } =  props;
    useEffect(() => {
        let obj = new BabylonColorGradingTexture(url, sceneOrEngine, onLoad);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PColorGradingTexture = buildExtends<IColorGradingTextureProps & IColorGradingTextureParams>(_);