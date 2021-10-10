import { FreeCamera as BabylonFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends, ITargetCameraParams } from './TargetCamera';
import { useEffect, useLayoutEffect, useReducer, useState } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IFreeCameraProps = IComponentProps<BabylonFreeCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type IFreeCameraParams = ITargetCameraParams & {}

function FreeCameraHOC(EL: React.FC<IFreeCameraParams>) {
    return (props: IFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FreeCameraHOC(e));
}

function _(props: IFreeCameraProps) {
    const { init, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonFreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFreeCamera = buildExtends<IFreeCameraProps & IFreeCameraParams>(_);