import { DeviceOrientationCamera as BabylonDeviceOrientationCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IFreeCameraInitial, buildExtends as _buildExtends } from './FreeCamera';

export type IDeviceOrientationCameraInitial<T> = IFreeCameraInitial<T> & {

};
export type IDeviceOrientationCameraProps = IDeviceOrientationCameraInitial<BabylonDeviceOrientationCamera> & IDeviceOrientationCameraOptions;

function DeviceOrientationCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IDeviceOrientationCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, position } = props;

        useEffect(() => {
            console.log(`DeviceOrientationCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonDeviceOrientationCamera(name, position, scene!);
                console.log(`DeviceOrientationCamera ${name} created`);
            }
        }, [])

        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DeviceOrientationCameraHOC(e));
};

export const P2PDeviceOrientationCamera = buildExtends<IDeviceOrientationCameraProps>(ChildHOC(null));

export type IDeviceOrientationCameraOptions = {
    
}