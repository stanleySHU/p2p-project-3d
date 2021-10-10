import { DirectionalLight as BabylonDirectionalLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ShadowLight';
import { useEffect, useLayoutEffect, useReducer, useState } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IDirectionalLightProps = IComponentProps<BabylonDirectionalLight> &  {
    name: string, 
    direction: Vector3, 
    scene: BabylinScene
}

export type IDirectionalLightParams = {}

function DirectionalLightHOC(EL: React.FC) {
    return (props: IDirectionalLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DirectionalLightHOC(e));
}

function _(props: IDirectionalLightProps) {
    const { init, name, direction, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonDirectionalLight (name, direction, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDirectionalLight = buildExtends<IDirectionalLightProps & IDirectionalLightParams>(_);