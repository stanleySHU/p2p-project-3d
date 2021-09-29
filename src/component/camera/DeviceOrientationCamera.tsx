import { DeviceOrientationCamera as BabylonDeviceOrientationCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IFreeCameraInitial, extendsFrom as _extendsFrom } from './FreeCamera';

export type IDeviceOrientationCameraInitial<T> = {

} & IFreeCameraInitial<T>;
export type IDeviceOrientationCameraProps = IDeviceOrientationCameraInitial<BabylonDeviceOrientationCamera> & IDeviceOrientationCameraOptions;

export const DeviceOrientationCameraHOC = (EL: Nullable<React.FC<IDeviceOrientationCameraProps>>) => {
    return (props: IDeviceOrientationCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonDeviceOrientationCamera(name, position, scene!);
                console.log(`DeviceOrientationCamera ${name} created`);
            }
        }, [])

        return EL && <EL {...props}/>
    };
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(DeviceOrientationCameraHOC(e));
};

export const P2PDeviceOrientationCamera = extendsFrom<IDeviceOrientationCameraProps>(null);

export type IDeviceOrientationCameraOptions = {
    
}