import { SpotLight as BabylonSpotLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { Component, useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { LightHOC } from './Light';
import { ShadowLightHOC } from './ShadowLight';

export type ISpotLightProps = IComponentProps &  {
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

function _(props: ISpotLightProps) {
    const { init, name, position, direction, angle, exponent, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonSpotLight(name, position, direction, angle, exponent, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSpotLight = getEL<ISpotLightParams>(_, [
    SpotLightHOC,
    ShadowLightHOC,
    LightHOC,
    ComponentHOC
]);