import { ArcRotateCamera as BabylonArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { INodeParams, NodeHOC } from '../node/Node';
import { CameraHOC, ICameraParams } from './Camera';
import { ITargetCameraParams, TargetCameraHOC } from './TargetCamera';

export type IArcRotateCameraProps = IComponentProps& {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type IArcRotateCameraParams = {

}

export function ArcRotateCameraHOC(EL: React.FC) {
    return (props: IArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IArcRotateCameraProps) {
    const { init, name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonArcRotateCamera(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PArcRotateCamera = getEL<INodeParams & ICameraParams & ITargetCameraParams & IArcRotateCameraParams & IArcRotateCameraProps>(_, [
    ArcRotateCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);