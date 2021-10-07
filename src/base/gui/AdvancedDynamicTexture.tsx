import { Scene as BabylonScene } from '@babylonjs/core';
import { AdvancedDynamicTexture as BabylonAdvancedDynamicTexture} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from '../Component'

export type IAdvancedDynamicTextureProps = {
    name: string, 
    width: number | undefined, 
    height: number | undefined, 
    scene: Nullable<BabylonScene>, 
    generateMipMaps?: boolean, 
    samplingMode?: number, 
    BabylonSceneinvertY?: boolean
}

export type IAdvancedDynamicTextureParams = {

}

function AdvancedDynamicTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IAdvancedDynamicTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AdvancedDynamicTextureHOC(e));
}

function _(props: IAdvancedDynamicTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, width, height, scene, generateMipMaps, samplingMode, BabylonSceneinvertY } = props;
    useEffect(() => {
        let obj = new BabylonAdvancedDynamicTexture(name, width, height, scene, generateMipMaps, samplingMode, BabylonSceneinvertY );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PAdvancedDynamicTexture = buildExtends<IAdvancedDynamicTextureProps & IAdvancedDynamicTextureParams>(_); 