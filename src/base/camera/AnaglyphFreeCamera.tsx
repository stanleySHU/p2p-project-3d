import { AnaglyphFreeCamera as BabylonAnaglyphFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"

export type IAnaglyphFreeCameraProps = {
    name: string, 
    position: Vector3, 
    interaxialDistance: number, 
    scene: BabylinScene
}

export type IAnaglyphFreeCameraParams = {

}

function AnaglyphFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IAnaglyphFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AnaglyphFreeCameraHOC(e));
}

function _(props: IAnaglyphFreeCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, interaxialDistance, scene } =  props;
    useEffect(() => {
        let obj = new BabylonAnaglyphFreeCamera(name, position, interaxialDistance, scene );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PAnaglyphFreeCamera = buildExtends<IAnaglyphFreeCameraProps & IAnaglyphFreeCameraParams>(_);