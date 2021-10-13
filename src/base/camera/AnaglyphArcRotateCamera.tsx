import { AnaglyphArcRotateCamera as BabylonAnaglyphArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { ArcRotateCameraHOC } from './ArcRotateCamera';
import { CameraHOC } from './Camera';
import { TargetCameraHOC } from './TargetCamera';

export type IAnaglyphArcRotateCameraProps = IComponentProps & {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Vector3, 
    interaxialDistance: number, 
    scene: BabylinScene
}

export type IAnaglyphArcRotateCameraParams = {

}

export function AnaglyphArcRotateCameraHOC(EL: React.FC) {
    return (props: IAnaglyphArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IAnaglyphArcRotateCameraProps) {
    const { init, name, alpha, beta, radius, target, interaxialDistance, scene} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAnaglyphArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAnaglyphArcRotateCamera = getEL<IAnaglyphArcRotateCameraParams>(_, [
    AnaglyphArcRotateCameraHOC,
    ArcRotateCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);