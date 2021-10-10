import { ColorGradingTexture as BabylonColorGradingTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './BaseTexture'

export type IColorGradingTextureProps = IComponentProps<BabylonColorGradingTexture> & {
    url: string, 
    sceneOrEngine: BabylonScene | ThinEngine, 
    onLoad?: Nullable<() => void>
}

export type IColorGradingTextureParams = {}

function ColorGradingTextureHOC(EL: React.FC) {
    return (props: IColorGradingTextureParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ColorGradingTextureHOC(e));
}

function _(props: IColorGradingTextureProps) {
    const { init, url, sceneOrEngine, onLoad } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonColorGradingTexture(url, sceneOrEngine, onLoad);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PColorGradingTexture = buildExtends<IColorGradingTextureProps & IColorGradingTextureParams>(_);