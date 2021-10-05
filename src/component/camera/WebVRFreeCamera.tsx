import { WebVRFreeCamera as BabylonWebVRFreeCamera, WebVROptions, WebXRSessionManager } from '@babylonjs/core';
import React, { useEffect } from "react";
import { IFreeCameraInitial, buildExtends as _buildExtends } from "./FreeCamera";
import { ChildHOC } from '../Component';

export type IWebVRFreeCameraInitial<T> = IFreeCameraInitial<T> & {
    webVROptions?: WebVROptions
};
export type IWebVRFreeCameraProps = IWebVRFreeCameraInitial<BabylonWebVRFreeCamera> & IWebVRFreeCameraOptions;

function WebVRFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IWebVRFreeCameraProps) => {
        const { scene, instance, name, position,  webVROptions } = props;

        useEffect(() => {
            console.log(`WebVRFreeCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonWebVRFreeCamera(name, position, scene, webVROptions);
                console.log(`WebVRFreeCamera ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };  
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(WebVRFreeCameraHOC(e));
};

export const P2PWebVRFreeCamera = buildExtends<IWebVRFreeCameraProps>(ChildHOC(null));

export type IWebVRFreeCameraOptions = {}