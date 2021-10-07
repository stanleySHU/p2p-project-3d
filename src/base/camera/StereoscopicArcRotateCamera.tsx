import { StereoscopicArcRotateCamera as BabylonStereoscopicArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ArcRotateCamera';
import { useEffect, useReducer } from "react"

export type IStereoscopicArcRotateCameraProps = {
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

function StereoscopicArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IStereoscopicArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StereoscopicArcRotateCameraHOC(e));
}

function _(props: IStereoscopicArcRotateCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene} =  props;
    useEffect(() => {
        let obj = new BabylonStereoscopicArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PStereoscopicArcRotateCamera = buildExtends<IStereoscopicArcRotateCameraProps & IStereoscopicArcRotateCameraParams>(_);