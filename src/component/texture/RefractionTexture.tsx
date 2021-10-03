import { RefractionTexture as BabylonRefractionTexture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IRenderTargetTextureInitial, buildExtends as _buildExtends } from './RenderTargetTexture';

export type IRefractionTextureInitial<T> = IRenderTargetTextureInitial<T> & {
    size: number
}
export type IRefractionTextureProps = IRefractionTextureInitial<BabylonRefractionTexture>;

function RefractionTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRefractionTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, size, generateMipMaps } = props;

        useEffect(() => {
            console.log(`RefractionTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonRefractionTexture(name, size, scene!, generateMipMaps);
                console.log(`RefractionTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RefractionTextureHOC(e));
}

export const P2PRefractionTexture = buildExtends<IRefractionTextureProps>(ChildHOC(null));
    
export type IRefractionTextureOptions = {};