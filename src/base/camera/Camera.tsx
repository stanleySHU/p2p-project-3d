import { Camera as BabylonCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from '../node/Node';
import { useEffect, useReducer } from "react"

export type ICameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ICameraParams = {

}

function CameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ICameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CameraHOC(e));
}

function _(props: ICameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        let obj = new BabylonCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCamera = buildExtends<ICameraProps & ICameraParams>(_);