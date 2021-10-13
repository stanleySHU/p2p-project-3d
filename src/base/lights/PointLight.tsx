import { PointLight as BabylonPointLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { LightHOC } from './Light';
import { ShadowLightHOC } from './ShadowLight';

export type IPointLightProps = IComponentProps &  {
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IPointLightParams = {

}

function PointLightHOC(EL: React.FC) {
    return (props: IPointLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IPointLightProps) {
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPointLight (name, position, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPointLight = getEL<IPointLightParams>(_, [
    PointLightHOC,
    ShadowLightHOC,
    LightHOC,
    ComponentHOC
]);