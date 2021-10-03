import { TargetCamera as BabylonTargetCamera, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { ICameraInitial, buildExtends as _buildExtends } from './Camera';

export type ITargetCameraInitial<T> = ICameraInitial<T> & {};
export type ITargetCameraProps = ITargetCameraInitial<BabylonTargetCamera> & ITargetCameraOptions;

function TargetCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ITargetCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`TargetCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonTargetCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log(`TargetCamera ${name} created`);
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