import { TouchCamera as BabylonTouchCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { FreeCameraHOC } from './FreeCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { TargetCameraHOC } from './TargetCamera';
import { CameraHOC } from './Camera';
import { NodeHOC } from '../node/Node';

export type ITouchCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type ITouchCameraParams = {

}

export function TouchCameraHOC(EL: React.FC) {
    return (props: ITouchCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: ITouchCameraProps) {
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonTouchCamera(name, position, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTouchCamera = getEL<ITouchCameraParams>(_, [
    TouchCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);