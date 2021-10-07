import { BaseTexture as BabylonBaseTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './ThinTexture'

export type IBaseTextureProps = {
    sceneOrEngine: Nullable<BabylonScene | ThinEngine>
}

export type IBaseTextureParams = {

}

function BaseTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IBaseTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BaseTextureHOC(e));
}

function _(props: IBaseTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { sceneOrEngine } =  props;
    useEffect(() => {
        let obj = new BabylonBaseTexture(sceneOrEngine);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PBaseTexture = buildExtends<IBaseTextureProps & IBaseTextureParams>(_);