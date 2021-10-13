import { AnaglyphFreeCamera as BabylonAnaglyphFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { FreeCameraHOC } from './FreeCamera';
import { TargetCameraHOC } from './TargetCamera';

export type IAnaglyphFreeCameraProps = IComponentProps & {
    name: string, 
    position: Vector3, 
    interaxialDistance: number, 
    scene: BabylinScene
}

export type IAnaglyphFreeCameraParams = {

}

export function AnaglyphFreeCameraHOC(EL: React.FC) {
    return (props: IAnaglyphFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IAnaglyphFreeCameraProps) {
    const { init, name, position, interaxialDistance, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAnaglyphFreeCamera(name, position, interaxialDistance, scene );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAnaglyphFreeCamera = getEL<IAnaglyphFreeCameraParams>(_, [
    AnaglyphFreeCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);