import { VRDeviceOrientationFreeCamera as BabylonVRDeviceOrientationFreeCamera, Scene as BabylinScene, Vector3, VRCameraMetrics } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { DeviceOrientationCameraHOC } from './DeviceOrientationCamera'
import { FreeCameraHOC } from './FreeCamera';
import { TargetCameraHOC } from './TargetCamera';

export type IVRDeviceOrientationFreeCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    compensateDistortion?: boolean, 
    vrCameraMetrics?: VRCameraMetrics
}

export type IVRDeviceOrientationFreeCameraParams = {

}

function VRDeviceOrientationFreeCameraHOC(EL: React.FC) {
    return (props: IVRDeviceOrientationFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IVRDeviceOrientationFreeCameraProps) {
    const { init, name, position, scene, compensateDistortion, vrCameraMetrics } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonVRDeviceOrientationFreeCamera(name, position, scene, compensateDistortion, vrCameraMetrics );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVRDeviceOrientationFreeCamera = getEL<IVRDeviceOrientationFreeCameraParams>(_, [
    VRDeviceOrientationFreeCameraHOC,
    DeviceOrientationCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);