import { StereoscopicArcRotateCamera as BabylonStereoscopicArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ArcRotateCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
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
    const { init, name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStereoscopicArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStereoscopicArcRotateCamera = buildExtends<IStereoscopicArcRotateCameraProps & IStereoscopicArcRotateCameraParams>(_);