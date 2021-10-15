import { Scene as BabylonScene } from '@babylonjs/core';
import { AdvancedDynamicTexture as BabylonAdvancedDynamicTexture} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component'
import { BaseTextureHOC, IBaseTextureParams } from '../texture/BaseTexture';
import { DynamicTextureHOC, IDynamicTextureParams } from '../texture/DynamicTexture';
import { ITextureParams, TextureHOC } from '../texture/Texture';
import { IThinTextureParams, ThinTextureHOC } from '../texture/ThinTexture';

export type IAdvancedDynamicTextureProps = IComponentProps & {
    name: string, 
    foreground?: boolean, 
    scene?: Nullable<BabylonScene>, 
    sampling?: number
}

export type IAdvancedDynamicTextureParams = {
    background?: string,
    idealWidth?: number,
    idealHeight?: number,
}

export type IAdvancedDynamicTextureContextOptions = {
    ADTexture: BabylonAdvancedDynamicTexture
}

export const AdvancedDynamicTextureContext = React.createContext<IAdvancedDynamicTextureContextOptions>({} as any);

function AdvancedDynamicTextureHOC(EL: React.FC<IAdvancedDynamicTextureParams>) {
    return (props: IAdvancedDynamicTextureParams) => {
        const instance: BabylonAdvancedDynamicTexture = (props as any).instance;
        useEffect(() => {   
            if (instance) instance.background = props.background || '#000000';
        }, [props.background, instance]);
        useEffect(() => {
            if (instance && props.idealWidth) instance.idealWidth = props.idealWidth;
        }, [props.idealWidth, instance]);
        useEffect(() => {
            if (instance && props.idealHeight) instance.idealHeight = props.idealHeight;
        }, [props.idealHeight, instance])
        return <EL {...props}/>
    }
}

function _(props: IAdvancedDynamicTextureProps) {
    const { instance, init, name, foreground, scene, sampling } = props;
    useLayoutEffect(() => {
        let obj = BabylonAdvancedDynamicTexture.CreateFullscreenUI(name, foreground, scene, sampling );
        init!(obj);
    }, []);
    return <AdvancedDynamicTextureContext.Provider value={{ADTexture: instance!}}>
        <P2PChildren {...props}/>
    </AdvancedDynamicTextureContext.Provider>;
}

export const P2PAdvancedDynamicTexture = getEL<IThinTextureParams & IBaseTextureParams & ITextureParams & IDynamicTextureParams & IAdvancedDynamicTextureParams & IAdvancedDynamicTextureProps>(_, [
    AdvancedDynamicTextureHOC,
    DynamicTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);

