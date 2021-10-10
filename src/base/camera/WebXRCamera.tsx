import { WebXRCamera as BabylonWebXRCamera, Scene as BabylinScene, WebXRSessionManager } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IWebXRCameraProps = IComponentProps<BabylonWebXRCamera> &{
    name: string, 
    scene: BabylinScene, 
    _xrSessionManager: WebXRSessionManager
}

export type IWebXRCameraParams = {

}

function WebXRCameraHOC(EL: React.FC) {
    return (props: IWebXRCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(WebXRCameraHOC(e));
}

function _(props: IWebXRCameraProps) {
    const { init, name, scene, _xrSessionManager } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonWebXRCamera(name, scene, _xrSessionManager);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PWebXRCamera = buildExtends<IWebXRCameraProps & IWebXRCameraParams>(_);