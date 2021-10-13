import { StereoscopicArcRotateCamera as BabylonStereoscopicArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { ArcRotateCameraHOC} from './ArcRotateCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { TargetCameraHOC } from './TargetCamera';
import { CameraHOC } from './Camera';
import { NodeHOC } from '../node/Node';

export type IStereoscopicArcRotateCameraProps = IComponentProps & {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Vector3, 
    interaxialDistance: number, 
    isStereoscopicSideBySide: boolean, 
    scene: BabylinScene
}

export type IStereoscopicArcRotateCameraParams = {

}

function StereoscopicArcRotateCameraHOC(EL: React.FC) {
    return (props: IStereoscopicArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}
function _(props: IStereoscopicArcRotateCameraProps) {
    const { init, name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStereoscopicArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStereoscopicArcRotateCamera = getEL<IStereoscopicArcRotateCameraParams>(_, [
    StereoscopicArcRotateCameraHOC,
    ArcRotateCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);