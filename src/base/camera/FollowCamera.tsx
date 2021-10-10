import { AbstractMesh, FollowCamera as BabylonFollowCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
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
    const { init, name, position, scene, lockedTarget } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonFollowCamera(name, position, scene, lockedTarget);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFollowCamera = buildExtends<IFollowCameraProps & IFollowCameraParams>(_);