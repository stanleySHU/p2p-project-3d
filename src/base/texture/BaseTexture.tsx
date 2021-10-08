import { BaseTexture as BabylonBaseTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './ThinTexture'

export type IBaseTextureProps = IComponentProps<BabylonBaseTexture> & {
    sceneOrEngine: Nullable<BabylonScene | ThinEngine>
}

export type IBaseTextureParams = {}

function BaseTextureHOC(EL: React.FC) {
    return (props: IBaseTextureParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BaseTextureHOC(e));
}

function _(props: IBaseTextureProps) {
    const { instance, sceneOrEngine } =  props;
    useEffect(() => {
        instance!.current = new BabylonBaseTexture(sceneOrEngine);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBaseTexture = buildExtends<IBaseTextureProps & IBaseTextureParams>(_);