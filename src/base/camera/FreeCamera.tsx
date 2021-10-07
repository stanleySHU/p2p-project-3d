import { FreeCamera as BabylonFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"

export type IFreeCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type IFreeCameraParams = {

}

function FreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FreeCameraHOC(e));
}

function _(props: IFreeCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        let obj = new BabylonFreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PFreeCamera = buildExtends<IFreeCameraProps & IFreeCameraParams>(_);