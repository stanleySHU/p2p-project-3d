import { Scene as BabylonScene } from '@babylonjs/core';
import { AdvancedDynamicTexture as BabylonAdvancedDynamicTexture } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../Component'; 

export type IAdvancedDynamicTextureInitial<T> = IComponentProps<T> & {
    name: string, 
    width?: number, 
    height?: number, 
    scene: Nullable<BabylonScene>, 
    generateMipMaps?: boolean, 
    samplingMode?: number, 
    invertY?: boolean
}
export type IAdvancedDynamicTextureProps = IAdvancedDynamicTextureInitial<BabylonAdvancedDynamicTexture>;

export function AdvancedDynamicTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IAdvancedDynamicTextureProps) => {
        const { instance, name, width, height, scene, generateMipMaps, samplingMode, invertY } = props;
        useEffect(() => {
            console.log(`AdvancedDynamicTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonAdvancedDynamicTexture(name, width, height, scene as any, generateMipMaps, samplingMode, invertY);
                console.log(`AdvancedDynamicTexture ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(AdvancedDynamicTextureHOC(e));
}

export const P2PAdvancedDynamicTexture = buildExtends(ChildHOC(null));