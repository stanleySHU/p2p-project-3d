import { AbstractMesh, FlyCamera as BabylonFlyCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IFlyCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type IFlyCameraParams = {

}

function FlyCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IFlyCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FlyCameraHOC(e));
}

function _(props: IFlyCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        let obj = new BabylonFlyCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PFlyCamera = buildExtends<IFlyCameraProps & IFlyCameraParams>(_);