import { VRDeviceOrientationFreeCamera as BabylonVRDeviceOrientationFreeCamera, Scene as BabylinScene, Vector3, VRCameraMetrics } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './DeviceOrientationCamera';
import { useEffect, useReducer } from "react"

export type IVRDeviceOrientationFreeCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    compensateDistortion?: boolean, 
    vrCameraMetrics?: VRCameraMetrics
}

export type IVRDeviceOrientationFreeCameraParams = {

}

function VRDeviceOrientationFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IVRDeviceOrientationFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VRDeviceOrientationFreeCameraHOC(e));
}

function _(props: IVRDeviceOrientationFreeCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene, compensateDistortion, vrCameraMetrics } =  props;
    useEffect(() => {
        let obj = new BabylonVRDeviceOrientationFreeCamera(name, position, scene, compensateDistortion, vrCameraMetrics );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PVRDeviceOrientationFreeCamera = buildExtends<IVRDeviceOrientationFreeCameraProps & IVRDeviceOrientationFreeCameraParams>(_);