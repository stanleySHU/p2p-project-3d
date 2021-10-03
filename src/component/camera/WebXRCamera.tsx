import { WebXRCamera as BabylonWebXRCamera, WebXRSessionManager } from '@babylonjs/core';
import React, { useContext, useEffect } from "react";
import { SceneContext } from "../Scene";
import { IFreeCameraInitial, buildExtends as _buildExtends } from "./FreeCamera";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from '../Component';

export type IWebXRCameraInitial<T> = IFreeCameraInitial<T> & {
    _xrSessionManager: WebXRSessionManager
};
export type IWebXRCameraProps = IWebXRCameraInitial<BabylonWebXRCamera> & IWebXRCameraOptions;

function WebXRCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IWebXRCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, _xrSessionManager } = props;

        useEffect(() => {
            console.log(`WebXRCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonWebXRCamera(name, scene!, _xrSessionManager);
                console.log(`WebXRCamera ${name} created`);
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