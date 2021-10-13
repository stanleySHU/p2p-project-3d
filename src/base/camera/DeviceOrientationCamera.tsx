import { DeviceOrientationCamera as BabylonDeviceOrientationCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { FreeCameraHOC } from './FreeCamera';
import { TargetCameraHOC } from './TargetCamera';

export type IDeviceOrientationCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IDeviceOrientationCameraParams = {

}

export function DeviceOrientationCameraHOC(EL: React.FC) {
    return (props: IDeviceOrientationCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IDeviceOrientationCameraProps) {
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonDeviceOrientationCamera(name, position, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}


export const P2PDeviceOrientationCamera = getEL<IDeviceOrientationCameraParams>(_, [
    DeviceOrientationCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);