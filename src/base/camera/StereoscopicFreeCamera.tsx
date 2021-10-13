import { StereoscopicFreeCamera as BabylonStereoscopicFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { FreeCameraHOC } from './FreeCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { TargetCameraHOC } from './TargetCamera';
import { CameraHOC } from './Camera';
import { NodeHOC } from '../node/Node';

export type IStereoscopicFreeCameraProps = IComponentProps & {
    name: string, 
    position: Vector3, 
    interaxialDistance: number, 
    isStereoscopicSideBySide: boolean,
    scene: BabylinScene
}

export type IStereoscopicFreeCameraParams = {

}

function StereoscopicFreeCameraHOC(EL: React.FC) {
    return (props: IStereoscopicFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IStereoscopicFreeCameraProps) {
    const { init, name, position, interaxialDistance, isStereoscopicSideBySide, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStereoscopicFreeCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStereoscopicFreeCamera = getEL<IStereoscopicFreeCameraParams>(_, [
    StereoscopicFreeCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);