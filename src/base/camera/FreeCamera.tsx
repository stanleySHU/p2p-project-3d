import { FreeCamera as BabylonFreeCamera } from '@babylonjs/core';
import React, { useEffect } from "react";
import { ITargetCameraInitial, buildExtends as _buildExtends } from "./TargetCamera";
import { ChildHOC } from '../Component';

export type IFreeCameraInitial<T> = ITargetCameraInitial<T> & {};
export type IFreeCameraProps = IFreeCameraInitial<BabylonFreeCamera> & IFreeCameraOptions;

function FreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IFreeCameraProps) => {
        const { scene, instance, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`FreeCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonFreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);
                // instance.current.setTarget();
                console.log(`FreeCamera ${name} created`);
            }
        }, []);

        useEffect(() => {
        });

        return <EL {...props}/>
    };  
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FreeCameraHOC(e));
};

export const P2PFreeCamera = buildExtends<IFreeCameraProps>(ChildHOC(null));

export type IFreeCameraOptions = {
    
}