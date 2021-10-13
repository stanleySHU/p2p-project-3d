import { Scene as BabylonScene } from '@babylonjs/core';
import { AdvancedDynamicTexture as BabylonAdvancedDynamicTexture} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component'
import { BaseTextureHOC } from '../texture/BaseTexture';
import { DynamicTextureHOC } from '../texture/DynamicTexture';
import { TextureHOC } from '../texture/Texture';
import { ThinTextureHOC } from '../texture/ThinTexture';

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
            if (instance) instance.idealWidth = props.idealWidth || 960;
        }, [props.idealWidth, instance]);
        useEffect(() => {
            if (instance) instance.idealHeight = props.idealHeight || 540;
        }, [props.idealHeight, instance])
        return <EL {...props}/>
    }
}

function _(props: IAdvancedDynamicTextureProps) {
    const { instance, init, name, foreground, scene, sampling } = props;
    useLayoutEffect(() => {
        let obj = BabylonAdvancedDynamicTexture.CreateFullscreenUI(name, foreground, scene, sampling )
        init!(obj);
        return () => {
            obj.dispose();
        }
    }, []);
    return <AdvancedDynamicTextureContext.Provider value={{ADTexture: instance!}}>
        <P2PChildren {...props}/>
    </AdvancedDynamicTextureContext.Provider>;
}

export const P2PAdvancedDynamicTexture = getEL(_, [
    AdvancedDynamicTextureHOC,
    DynamicTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);

