import { VRCameraMetrics, VRDeviceOrientationArcRotateCamera as BabylonVRDeviceOrientationArcRotateCamera } from '@babylonjs/core';
import React, {useEffect } from "react"
import { IArcRotateCameraInitial, buildExtends as _buildExtends } from "./ArcRotateCamera";
import { ChildHOC } from '../Component';

export type IVRDeviceOrientationArcRotateCameraInitial<T> = IArcRotateCameraInitial<T> & {
    compensateDistortion?: boolean, 
    vrCameraMetrics?: VRCameraMetrics 
};
export type IVRDeviceOrientationArcRotateCameraProps = IVRDeviceOrientationArcRotateCameraInitial<BabylonVRDeviceOrientationArcRotateCamera> & IVRDeviceOrientationArcRotateCameraOptions;

function VRDeviceOrientationArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IVRDeviceOrientationArcRotateCameraProps) => {
        const { scene, instance, name, alpha, beta, radius, target, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`VRDeviceOrientationArcRotateCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonVRDeviceOrientationArcRotateCamera(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive);
                console.log(`VRDeviceOrientationArcRotateCamera ${name} created`);
            }
        }, []);
        
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VRDeviceOrientationArcRotateCameraHOC(e));
};

export const P2PVRDeviceOrientationArcRotateCamera = buildExtends<IVRDeviceOrientationArcRotateCameraProps>(ChildHOC(null));

export type IVRDeviceOrientationArcRotateCameraOptions = {

};