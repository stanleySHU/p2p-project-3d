import { DirectionalLight as BabylonDirectionalLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ShadowLight';
import { useEffect, useReducer } from "react"

export type IDirectionalLightProps = {
    name: string, 
    direction: Vector3, 
    scene: BabylinScene
}

export type IDirectionalLightParams = {

}

function DirectionalLightHOC<T>(EL: React.FC<T>) {
    return (props: T & IDirectionalLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DirectionalLightHOC(e));
}

function _(props: IDirectionalLightProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, direction, scene } =  props;
    useEffect(() => {
        let obj = new BabylonDirectionalLight (name, direction, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PDirectionalLight = buildExtends<IDirectionalLightProps & IDirectionalLightParams>(_);