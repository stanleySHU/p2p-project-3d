import { AnaglyphArcRotateCamera as BabylonAnaglyphArcRotateCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ArcRotateCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IAnaglyphArcRotateCameraProps = IComponentProps<BabylonAnaglyphArcRotateCamera> & {
    name: string, 
    alpha: number, 
    beta: number, 
    radius: number, 
    target: Vector3, 
    interaxialDistance: number, 
    scene: BabylinScene
}

export type IAnaglyphArcRotateCameraParams = {

}

function AnaglyphArcRotateCameraHOC(EL: React.FC) {
    return (props: IAnaglyphArcRotateCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AnaglyphArcRotateCameraHOC(e));
}

function _(props: IAnaglyphArcRotateCameraProps) {
    const { init, name, alpha, beta, radius, target, interaxialDistance, scene} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAnaglyphArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAnaglyphArcRotateCamera = buildExtends<IAnaglyphArcRotateCameraProps & IAnaglyphArcRotateCameraParams>(_);