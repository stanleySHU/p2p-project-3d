import { HemisphericLight as BabylonHemisphericLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Light';
import { useEffect, useReducer } from "react"

export type IHemisphericLightProps = {
    name: string, 
    direction: Vector3, 
    scene: BabylinScene
}

export type IHemisphericLightParams = {

}

function HemisphericLightHOC<T>(EL: React.FC<T>) {
    return (props: T & IHemisphericLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HemisphericLightHOC(e));
}

function _(props: IHemisphericLightProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, direction, scene } =  props;
    useEffect(() => {
        let obj = new BabylonHemisphericLight (name, direction, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PHemisphericLight = buildExtends<IHemisphericLightProps & IHemisphericLightParams>(_);