import { AbstractMesh, ArcFollowCamera as BabylonArcFollowCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type IArcFollowCameraProps = IComponentProps<BabylonArcFollowCamera> & {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Nullable<AbstractMesh>, 
    scene: BabylinScene
}

export type IArcFollowCameraParams = {

}

function ArcFollowCameraHOC(EL: React.FC) {
    return (props: IArcFollowCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ArcFollowCameraHOC(e));
}

function _(props: IArcFollowCameraProps) {
    const { init, name, alpha, beta, radius, target, scene} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonArcFollowCamera(name, alpha, beta, radius, target, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PArcFollowCamera = buildExtends<IArcFollowCameraProps & IArcFollowCameraParams>(_);