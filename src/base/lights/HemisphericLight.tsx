import { HemisphericLight as BabylonHemisphericLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { LightHOC } from './Light';

export type IHemisphericLightProps = IComponentProps&  {
    name: string, 
    direction: Vector3, 
    scene: BabylinScene
}

export type IHemisphericLightParams = {

}

function HemisphericLightHOC(EL: React.FC) {
    return (props: IHemisphericLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IHemisphericLightProps) {
    const { init, name, direction, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonHemisphericLight (name, direction, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PHemisphericLight = getEL<IHemisphericLightParams>(_, [
    HemisphericLightHOC,
    LightHOC,
    ComponentHOC
]);