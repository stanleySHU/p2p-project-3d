import { AbstractMesh, ArcFollowCamera as BabylonArcFollowCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { TargetCameraHOC } from './TargetCamera';

export type IArcFollowCameraProps = IComponentProps & {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Nullable<AbstractMesh>, 
    scene: BabylinScene
}

export type IArcFollowCameraParams = {

}

export function ArcFollowCameraHOC(EL: React.FC) {
    return (props: IArcFollowCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IArcFollowCameraProps) {
    const { init, name, alpha, beta, radius, target, scene} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonArcFollowCamera(name, alpha, beta, radius, target, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PArcFollowCamera = getEL<IArcFollowCameraParams>(_, [
    ArcFollowCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);