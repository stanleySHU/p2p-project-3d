import { ArcRotateCamera as BabylonArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"

export type IArcRotateCameraProps = {
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

function ArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ArcRotateCameraHOC(e));
}

function _(props: IArcRotateCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        let obj = new BabylonArcRotateCamera(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PArcRotateCamera = buildExtends<IArcRotateCameraProps & IArcRotateCameraParams>(_);