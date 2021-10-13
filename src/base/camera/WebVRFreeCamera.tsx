import { WebVRFreeCamera as BabylonWebVRFreeCamera, Scene as BabylinScene, Vector3, WebVROptions } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { FreeCameraHOC } from './FreeCamera';
import { TargetCameraHOC } from './TargetCamera';

export type IWebVRFreeCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    webVROptions?: WebVROptions
}

export type IWebVRFreeCameraParams = {

}

function WebVRFreeCameraHOC(EL: React.FC) {
    return (props: IWebVRFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IWebVRFreeCameraProps) {
    const { init, name, position, scene, webVROptions } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonWebVRFreeCamera(name, position, scene, webVROptions);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PWebVRFreeCamera = getEL<IWebVRFreeCameraParams>(_, [
    WebVRFreeCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);