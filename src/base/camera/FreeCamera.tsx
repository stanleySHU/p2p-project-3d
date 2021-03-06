import { FreeCamera as BabylonFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer, useState } from "react"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { INodeParams, NodeHOC } from '../node/Node';
import { CameraHOC, ICameraParams } from './Camera';
import { ITargetCameraParams, TargetCameraHOC } from './TargetCamera';

export type IFreeCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type IFreeCameraParams = {}

export function FreeCameraHOC(EL: React.FC<IFreeCameraParams>) {
    return (props: IFreeCameraParams) => {
        return <EL {...props}/>
    }
}

function _(props: IFreeCameraProps) {
    const { init, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonFreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFreeCamera = getEL<IComponentProps & INodeParams & ICameraParams & ITargetCameraParams & IFreeCameraParams & IFreeCameraProps>(_, [
    FreeCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);