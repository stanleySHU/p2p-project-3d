import { PointLight as BabylonPointLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ShadowLight';
import { useEffect, useReducer } from "react"

export type IPointLightProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IPointLightParams = {

}

function PointLightHOC<T>(EL: React.FC<T>) {
    return (props: T & IPointLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PointLightHOC(e));
}

function _(props: IPointLightProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene } =  props;
    useEffect(() => {
        let obj = new BabylonPointLight (name, position, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPointLight = buildExtends<IPointLightProps & IPointLightParams>(_);