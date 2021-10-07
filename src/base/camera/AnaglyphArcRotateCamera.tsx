import { AnaglyphArcRotateCamera as BabylonAnaglyphArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ArcRotateCamera';
import { useEffect, useReducer } from "react"

export type IAnaglyphArcRotateCameraProps = {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Vector3, 
    interaxialDistance: number, 
    scene: BabylinScene
}

export type IAnaglyphArcRotateCameraParams = {

}

function AnaglyphArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IAnaglyphArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AnaglyphArcRotateCameraHOC(e));
}

function _(props: IAnaglyphArcRotateCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, alpha, beta, radius, target, interaxialDistance, scene} =  props;
    useEffect(() => {
        let obj = new BabylonAnaglyphArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PAnaglyphArcRotateCamera = buildExtends<IAnaglyphArcRotateCameraProps & IAnaglyphArcRotateCameraParams>(_);