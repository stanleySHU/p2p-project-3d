import { TargetCamera as BabylonTargetCamera, Vector3 } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { ICameraInitial, buildExtends as _buildExtends } from './Camera';

export type ITargetCameraInitial<T> = ICameraInitial<T> & {};
export type ITargetCameraProps = ITargetCameraInitial<BabylonTargetCamera> & ITargetCameraOptions;

function TargetCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ITargetCameraProps) => {
        const { scene, instance, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonTargetCamera(name, position, scene, setActiveOnSceneIfNoneActive);
            }
        }, []);

        useEffect(() => {
            
        });

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TargetCameraHOC(e));
};

export const P2PTargetCamera = buildExtends<ITargetCameraProps>(ChildHOC(null));

export type ITargetCameraOptions = {
    setTarget?: Vector3,
    target?: Vector3
}