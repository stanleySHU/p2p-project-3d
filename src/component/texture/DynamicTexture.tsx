import { DynamicTexture as BabylonDynamicTexture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IDynamicTextureInitial<T> = ITextureInitial<T> & {
    options: any, 
    generateMipMaps: boolean
}
export type IDynamicTextureProps = IDynamicTextureInitial<BabylonDynamicTexture>;

function DynamicTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IDynamicTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, options, generateMipMaps, samplingMode, format, invertY } = props;

        useEffect(() => {
            console.log(`DynamicTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonDynamicTexture(name, options, scene, generateMipMaps, samplingMode, format, invertY);
                console.log(`DynamicTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DynamicTextureHOC(e));
}

export const P2PDynamicTexture = buildExtends<IDynamicTextureProps>(ChildHOC(null));
    
export type IDynamicTextureOptions = {};