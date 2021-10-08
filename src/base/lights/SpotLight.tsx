import { SpotLight as BabylonSpotLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ShadowLight';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type ISpotLightProps = IComponentProps<BabylonSpotLight> &  {
    name: string, 
    position: Vector3, 
    direction: Vector3, 
    angle: number, 
    exponent: number, 
    scene: BabylinScene
}

export type ISpotLightParams = {

}

function SpotLightHOC(EL: React.FC) {
    return (props: ISpotLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SpotLightHOC(e));
}

function _(props: ISpotLightProps) {
    const { instance, name, position, direction, angle, exponent, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonSpotLight(name, position, direction, angle, exponent, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSpotLight = buildExtends<ISpotLightProps & ISpotLightParams>(_);