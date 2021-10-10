import { VRDeviceOrientationArcRotateCamera as BabylonVRDeviceOrientationArcRotateCamera, Scene as BabylinScene, Vector3, VRCameraMetrics } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ArcRotateCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IVRDeviceOrientationArcRotateCameraProps = IComponentProps<BabylonVRDeviceOrientationArcRotateCamera> &{
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

function VRDeviceOrientationArcRotateCameraHOC(EL: React.FC) {
    return (props: IVRDeviceOrientationArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VRDeviceOrientationArcRotateCameraHOC(e));
}

function _(props: IVRDeviceOrientationArcRotateCameraProps) {
    const { init, name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonVRDeviceOrientationArcRotateCamera(name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVRDeviceOrientationArcRotateCamera = buildExtends<IVRDeviceOrientationArcRotateCameraProps & IVRDeviceOrientationArcRotateCameraParams>(_);