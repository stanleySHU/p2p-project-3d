import { WebVRFreeCamera as BabylonWebVRFreeCamera, Scene as BabylinScene, Vector3, WebVROptions } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IWebVRFreeCameraProps = IComponentProps<BabylonWebVRFreeCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    webVROptions?: WebVROptions
}

export type IWebVRFreeCameraParams = {

}

function WebVRFreeCameraHOC(EL: React.FC) {
    return (props: IWebVRFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(WebVRFreeCameraHOC(e));
}

function _(props: IWebVRFreeCameraProps) {
    const { instance, name, position, scene, webVROptions } =  props;
    useEffect(() => {
        instance!.current = new BabylonWebVRFreeCamera(name, position, scene, webVROptions);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PWebVRFreeCamera = buildExtends<IWebVRFreeCameraProps & IWebVRFreeCameraParams>(_);