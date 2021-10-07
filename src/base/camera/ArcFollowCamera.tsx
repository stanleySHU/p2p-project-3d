import { AbstractMesh, ArcFollowCamera as BabylonArcFollowCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IArcFollowCameraProps = {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Nullable<AbstractMesh>, 
    scene: BabylinScene
}

export type IArcFollowCameraParams = {

}

function ArcFollowCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IArcFollowCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ArcFollowCameraHOC(e));
}

function _(props: IArcFollowCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, alpha, beta, radius, target, scene} =  props;
    useEffect(() => {
        let obj = new BabylonArcFollowCamera(name, alpha, beta, radius, target, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PArcFollowCamera = buildExtends<IArcFollowCameraProps & IArcFollowCameraParams>(_);