import { Scene as BabylonScene } from '@babylonjs/core';
import { AdvancedDynamicTexture as BabylonAdvancedDynamicTexture} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../Component'

export type IAdvancedDynamicTextureProps = IComponentProps<BabylonScene> & {
    name: string, 
    width?: number, 
    height?: number, 
    scene: Nullable<BabylonScene>, 
    generateMipMaps?: boolean, 
    samplingMode?: number, 
    BabylonSceneinvertY?: boolean
}

export type IAdvancedDynamicTextureParams = {

}

function AdvancedDynamicTextureHOC(EL: React.FC) {
    return (props: IAdvancedDynamicTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AdvancedDynamicTextureHOC(e));
}

function _(props: IAdvancedDynamicTextureProps) {
    const { instance, name, width, height, scene, generateMipMaps, samplingMode, BabylonSceneinvertY } = props;
    useEffect(() => {
        instance!.current = new BabylonAdvancedDynamicTexture(name, width, height, scene, generateMipMaps, samplingMode, BabylonSceneinvertY );
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAdvancedDynamicTexture = buildExtends<IAdvancedDynamicTextureProps & IAdvancedDynamicTextureParams>(_); 