import { VRDeviceOrientationArcRotateCamera as BabylonVRDeviceOrientationArcRotateCamera, Scene as BabylinScene, Vector3, VRCameraMetrics } from '@babylonjs/core';
import { ArcRotateCameraHOC } from './ArcRotateCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { TargetCameraHOC } from './TargetCamera';
import { CameraHOC } from './Camera';
import { NodeHOC } from '../node/Node';

export type IVRDeviceOrientationArcRotateCameraProps = IComponentProps &{
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

function _(props: IVRDeviceOrientationArcRotateCameraProps) {
    const { init, name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonVRDeviceOrientationArcRotateCamera(name, alpha, beta, radius, target, scene, compensateDistortion, vrCameraMetrics);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVRDeviceOrientationArcRotateCamera = getEL<IVRDeviceOrientationArcRotateCameraParams>(_, [
    VRDeviceOrientationArcRotateCameraHOC,
    ArcRotateCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);