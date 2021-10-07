import { WebXRCamera as BabylonWebXRCamera, Scene as BabylinScene, WebXRSessionManager } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"

export type IWebXRCameraProps = {
    name: string, 
    scene: BabylinScene, 
    _xrSessionManager: WebXRSessionManager
}

export type IWebXRCameraParams = {

}

function WebXRCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IWebXRCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(WebXRCameraHOC(e));
}

function _(props: IWebXRCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene, _xrSessionManager } =  props;
    useEffect(() => {
        let obj = new BabylonWebXRCamera(name, scene, _xrSessionManager);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PWebXRCamera = buildExtends<IWebXRCameraProps & IWebXRCameraParams>(_);