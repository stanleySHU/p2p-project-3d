import { AbstractMesh, FollowCamera as BabylonFollowCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IFollowCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    lockedTarget?: Nullable<AbstractMesh>
}

export type IFollowCameraParams = {

}

function FollowCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IFollowCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FollowCameraHOC(e));
}

function _(props: IFollowCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene, lockedTarget } =  props;
    useEffect(() => {
        let obj = new BabylonFollowCamera(name, position, scene, lockedTarget);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PFollowCamera = buildExtends<IFollowCameraProps & IFollowCameraParams>(_);