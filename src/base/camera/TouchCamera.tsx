import { TouchCamera as BabylonTouchCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"

export type ITouchCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type ITouchCameraParams = {

}

function TouchCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ITouchCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TouchCameraHOC(e));
}

function _(props: ITouchCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene } =  props;
    useEffect(() => {
        let obj = new BabylonTouchCamera(name, position, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTouchCamera = buildExtends<ITouchCameraProps & ITouchCameraParams>(_);