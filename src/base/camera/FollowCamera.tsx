import { AbstractMesh, FollowCamera as BabylonFollowCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { TargetCameraHOC } from './TargetCamera';

export type IFollowCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    lockedTarget?: Nullable<AbstractMesh>
}

export type IFollowCameraParams = {

}

function FollowCameraHOC(EL: React.FC) {
    return (props: IFollowCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IFollowCameraProps) {
    const { init, name, position, scene, lockedTarget } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonFollowCamera(name, position, scene, lockedTarget);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFollowCamera = getEL<IFollowCameraParams>(_, [
    FollowCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);