import { WebXRCamera as BabylonWebXRCamera, WebXRSessionManager } from '@babylonjs/core';
import React, { useEffect } from "react";
import { IFreeCameraInitial, buildExtends as _buildExtends } from "./FreeCamera";
import { ChildHOC } from '../Component';

export type IWebXRCameraInitial<T> = IFreeCameraInitial<T> & {
    _xrSessionManager: WebXRSessionManager
};
export type IWebXRCameraProps = IWebXRCameraInitial<BabylonWebXRCamera> & IWebXRCameraOptions;

function WebXRCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IWebXRCameraProps) => {
        const { scene, instance, name, _xrSessionManager } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonWebXRCamera(name, scene, _xrSessionManager);
            }
        }, []);

        return <EL {...props}/>
    };  
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(WebXRCameraHOC(e));
};

export const P2PWebXRCamera = buildExtends<IWebXRCameraProps>(ChildHOC(null));

export type IWebXRCameraOptions = {}