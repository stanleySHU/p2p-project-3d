import { TargetCamera as BabylonTargetCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Camera';
import { useEffect, useReducer } from "react"

export type ITargetCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ITargetCameraParams = {

}

function TargetCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ITargetCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TargetCameraHOC(e));
}

function _(props: ITargetCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        let obj = new BabylonTargetCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTargetCamera = buildExtends<ITargetCameraProps & ITargetCameraParams>(_);