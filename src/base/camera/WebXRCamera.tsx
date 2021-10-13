import { WebXRCamera as BabylonWebXRCamera, Scene as BabylinScene, WebXRSessionManager } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { FreeCameraHOC } from './FreeCamera';
import { TargetCameraHOC } from './TargetCamera';

export type IWebXRCameraProps = IComponentProps &{
    name: string, 
    scene: BabylinScene, 
    _xrSessionManager: WebXRSessionManager
}

export type IWebXRCameraParams = {

}

function WebXRCameraHOC(EL: React.FC) {
    return (props: IWebXRCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IWebXRCameraProps) {
    const { init, name, scene, _xrSessionManager } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonWebXRCamera(name, scene, _xrSessionManager);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PWebXRCamera = getEL<IWebXRCameraParams>(_, [
    WebXRCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);