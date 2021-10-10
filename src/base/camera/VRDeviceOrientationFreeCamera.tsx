import { VRDeviceOrientationFreeCamera as BabylonVRDeviceOrientationFreeCamera, Scene as BabylinScene, Vector3, VRCameraMetrics } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './DeviceOrientationCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IVRDeviceOrientationFreeCameraProps = IComponentProps<BabylonVRDeviceOrientationFreeCamera> &{
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VRDeviceOrientationFreeCameraHOC(e));
}

function _(props: IVRDeviceOrientationFreeCameraProps) {
    const { init, name, position, scene, compensateDistortion, vrCameraMetrics } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonVRDeviceOrientationFreeCamera(name, position, scene, compensateDistortion, vrCameraMetrics );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVRDeviceOrientationFreeCamera = buildExtends<IVRDeviceOrientationFreeCameraProps & IVRDeviceOrientationFreeCameraParams>(_);