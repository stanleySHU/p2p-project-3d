import { DeviceOrientationCamera as BabylonDeviceOrientationCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IFreeCameraInitial } from './FreeCamera';

export type IDeviceOrientationCameraInitial<T> = {

} & IFreeCameraInitial<T>;
export type IDeviceOrientationCameraProps = IDeviceOrientationCameraInitial<BabylonDeviceOrientationCamera>;

export const DeviceOrientationCameraHOC = (EL: Nullable<React.FC<IDeviceOrientationCameraProps>>) => {
    return (props: IDeviceOrientationCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonDeviceOrientationCamera(name, position, scene!);
                console.log('DeviceOrientationCamera created');
            }
        }, [])

        return EL &&  <EL {...props}/>
    };
}