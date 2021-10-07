import { VRDeviceOrientationArcRotateCamera as BabylonVRDeviceOrientationArcRotateCamera, Scene as BabylinScene, Vector3, VRCameraMetrics } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ArcRotateCamera';
import { useEffect, useReducer } from "react"

export type IVRDeviceOrientationArcRotateCameraProps = {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Vector3, 
    scene: BabylinScene, 
    compensateDistortion?: boolean, 
    vrCameraMetrics?: VRCameraMetrics
}

export type IVRDeviceOrientationArcRotateCameraParams = {

}

function VRDeviceOrientationArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IVRDeviceOrientationArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VRDeviceOrientationArcRotateCameraHOC(e));
}

function _(props: IVRDeviceOrientationArcRotateCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics } =  props;
    useEffect(() => {
        let obj = new BabylonVRDeviceOrientationArcRotateCamera(name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PVRDeviceOrientationArcRotateCamera = buildExtends<IVRDeviceOrientationArcRotateCameraProps & IVRDeviceOrientationArcRotateCameraParams>(_);