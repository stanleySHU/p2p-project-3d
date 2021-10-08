import { ArcRotateCamera as BabylonArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IArcRotateCameraProps = IComponentProps<BabylonArcRotateCamera> & {
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

function ArcRotateCameraHOC(EL: React.FC) {
    return (props: IArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ArcRotateCameraHOC(e));
}

function _(props: IArcRotateCameraProps) {
    const { instance, name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        instance!.current = new BabylonArcRotateCamera(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive );
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PArcRotateCamera = buildExtends<IArcRotateCameraProps & IArcRotateCameraParams>(_);