import { WebVRFreeCamera as BabylonWebVRFreeCamera, Scene as BabylinScene, Vector3, WebVROptions } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"

export type IWebVRFreeCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    webVROptions?: WebVROptions
}

export type IWebVRFreeCameraParams = {

}

function WebVRFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IWebVRFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(WebVRFreeCameraHOC(e));
}

function _(props: IWebVRFreeCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene, webVROptions } =  props;
    useEffect(() => {
        let obj = new BabylonWebVRFreeCamera(name, position, scene, webVROptions);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PWebVRFreeCamera = buildExtends<IWebVRFreeCameraProps & IWebVRFreeCameraParams>(_);