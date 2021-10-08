import { StereoscopicArcRotateCamera as BabylonStereoscopicArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ArcRotateCamera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IStereoscopicArcRotateCameraProps = IComponentProps<BabylonStereoscopicArcRotateCamera> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StereoscopicArcRotateCameraHOC(e));
}

function _(props: IStereoscopicArcRotateCameraProps) {
    const { instance, name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene} =  props;
    useEffect(() => {
        instance!.current = new BabylonStereoscopicArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStereoscopicArcRotateCamera = buildExtends<IStereoscopicArcRotateCameraProps & IStereoscopicArcRotateCameraParams>(_);