import { DirectionalLight as BabylonDirectionalLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ShadowLight';
import { useEffect, useReducer } from "react"
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
    const { instance, name, direction, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonDirectionalLight (name, direction, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDirectionalLight = buildExtends<IDirectionalLightProps & IDirectionalLightParams>(_);