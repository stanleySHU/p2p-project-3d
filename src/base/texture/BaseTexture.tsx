import { BaseTexture as BabylonBaseTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { ThinTextureHOC } from './ThinTexture';

export type IBaseTextureProps = IComponentProps & {
    sceneOrEngine: Nullable<BabylonScene | ThinEngine>
}

export type IBaseTextureParams = {}

export function BaseTextureHOC(EL: React.FC) {
    return (props: IBaseTextureParams) => {
        return <EL {...props}/>
    }
}

function _(props: IBaseTextureProps) {
    const { init, sceneOrEngine } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonBaseTexture(sceneOrEngine);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBaseTexture = getEL<IBaseTextureParams>(_, [
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);