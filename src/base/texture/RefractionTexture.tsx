import { RefractionTexture as BabylonRefractionTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './RenderTargetTexture'

export type IRefractionTextureProps = IComponentProps<BabylonRefractionTexture> & {
    name: string, 
    size: number, 
    scene: BabylonScene, 
    generateMipMaps?: boolean
}

export type IRefractionTextureParams = {

}

function RefractionTextureHOC(EL: React.FC) {
    return (props: IRefractionTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RefractionTextureHOC(e));
}

function _(props: IRefractionTextureProps) {
    const { instance, name, size, scene, generateMipMaps } =  props;
    useEffect(() => {
        instance!.current = new BabylonRefractionTexture(name, size, scene, generateMipMaps);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRefractionTexture = buildExtends<IRefractionTextureProps & IRefractionTextureParams>(_);