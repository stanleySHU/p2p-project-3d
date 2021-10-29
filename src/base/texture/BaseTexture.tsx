import { BaseTexture as BabylonBaseTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { isAllPresent } from '../../utils/lang';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { ThinTextureHOC } from './ThinTexture';

export type IBaseTextureProps = IComponentProps & {
    sceneOrEngine: Nullable<BabylonScene | ThinEngine>
}

export type IBaseTextureParams = {
    assignTo?: string;
    coordinatesMode?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

export function BaseTextureHOC(EL: React.FC<IBaseTextureParams>) {
    return (props: IBaseTextureParams) => {
        const { instance, parentInstance } = props as IComponentProps<BabylonBaseTexture>;
        const { assignTo, coordinatesMode } = props;
        useEffect(() => {
            isAllPresent(instance) && (parentInstance[assignTo || 'diffuseTexture'] = instance);
        }, [instance]);

        useEffect(() => {
            isAllPresent(instance, coordinatesMode) && (instance.coordinatesMode = coordinatesMode);
        }, [instance, coordinatesMode]);

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