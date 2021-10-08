import { AbstractMesh, FollowCamera as BabylonFollowCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type IFollowCameraProps = IComponentProps<BabylonFollowCamera> &{
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FollowCameraHOC(e));
}

function _(props: IFollowCameraProps) {
    const { instance, name, position, scene, lockedTarget } =  props;
    useEffect(() => {
        instance!.current = new BabylonFollowCamera(name, position, scene, lockedTarget);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFollowCamera = buildExtends<IFollowCameraProps & IFollowCameraParams>(_);