import { VirtualJoysticksCamera as BabylonVirtualJoysticksCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { FreeCameraHOC } from './FreeCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { TargetCameraHOC } from './TargetCamera';
import { CameraHOC } from './Camera';
import { NodeHOC } from '../node/Node';

export type IVirtualJoysticksCameraProps = IComponentProps&{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IVirtualJoysticksCameraParams = {

}

function VirtualJoysticksCameraHOC(EL: React.FC) {
    return (props: IVirtualJoysticksCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IVirtualJoysticksCameraProps) {
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonVirtualJoysticksCamera(name, position, scene );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVirtualJoysticksCamera = getEL<IVirtualJoysticksCameraParams>(_, [
    VirtualJoysticksCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);