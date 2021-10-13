import { DirectionalLight as BabylonDirectionalLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { LightHOC } from './Light';
import { ShadowLightHOC } from './ShadowLight';

export type IDirectionalLightProps = IComponentProps &  {
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

function _(props: IDirectionalLightProps) {
    const { init, name, direction, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonDirectionalLight (name, direction, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDirectionalLight = getEL<IDirectionalLightParams & IDirectionalLightProps>(_, [
    DirectionalLightHOC,
    ShadowLightHOC,
    LightHOC,
    ComponentHOC
]);