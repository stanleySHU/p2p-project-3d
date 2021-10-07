import { SpotLight as BabylonSpotLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ShadowLight';
import { useEffect, useReducer } from "react"

export type ISpotLightProps = {
    name: string, 
    position: Vector3, 
    direction: Vector3, 
    angle: number, 
    exponent: number, 
    scene: BabylinScene
}

export type ISpotLightParams = {

}

function SpotLightHOC<T>(EL: React.FC<T>) {
    return (props: T & ISpotLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SpotLightHOC(e));
}

function _(props: ISpotLightProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, direction, angle, exponent, scene } =  props;
    useEffect(() => {
        let obj = new BabylonSpotLight(name, position, direction, angle, exponent, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSpotLight = buildExtends<ISpotLightProps & ISpotLightParams>(_);