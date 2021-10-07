import { StereoscopicFreeCamera as BabylonStereoscopicFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"

export type IStereoscopicFreeCameraProps = {
    name: string, 
    position: Vector3, 
    interaxialDistance: number, 
    isStereoscopicSideBySide: boolean,
    scene: BabylinScene
}

export type IStereoscopicFreeCameraParams = {

}

function StereoscopicFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IStereoscopicFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StereoscopicFreeCameraHOC(e));
}

function _(props: IStereoscopicFreeCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, interaxialDistance, isStereoscopicSideBySide, scene } =  props;
    useEffect(() => {
        let obj = new BabylonStereoscopicFreeCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PStereoscopicFreeCamera = buildExtends<IStereoscopicFreeCameraProps & IStereoscopicFreeCameraParams>(_);