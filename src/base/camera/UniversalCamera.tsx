import { UniversalCamera as BabylonUniversalCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { FreeCameraHOC } from './FreeCamera';
import { TargetCameraHOC } from './TargetCamera';
import { TouchCameraHOC } from './TouchCamera';

export type IUniversalCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IUniversalCameraParams = {

}

function UniversalCameraHOC(EL: React.FC) {
    return (props: IUniversalCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IUniversalCameraProps) {
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonUniversalCamera(name, position, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PUniversalCamera = getEL<IUniversalCameraParams>(_, [
    UniversalCameraHOC,
    TouchCameraHOC,
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);