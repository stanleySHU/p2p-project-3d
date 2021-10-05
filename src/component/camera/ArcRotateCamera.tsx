import { ArcRotateCamera as BabylonArcRotateCamera, Vector3 } from '@babylonjs/core'
import React, {useEffect } from "react"
import { ITargetCameraInitial, buildExtends as _buildExtends } from "./TargetCamera";
import { ChildHOC } from '../Component';

export type IArcRotateCameraInitial<T> = ITargetCameraInitial<T> & {
    name: string,
    alpha: number,
    beta: number,
    radius: number,
    target: Vector3,
};
export type IArcRotateCameraProps = IArcRotateCameraInitial<BabylonArcRotateCamera> & IArcRotateCameraOptions;

function ArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IArcRotateCameraProps) => {
        const { scene, instance, name, alpha, beta, radius, target, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`ArcRotateCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonArcRotateCamera(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive);
                console.log(`ArcRotateCamera ${name} created`);
            }
        }, []);
        
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ArcRotateCameraHOC(e));
};

export const P2PArcRotateCamera = buildExtends<IArcRotateCameraProps>(ChildHOC(null));

export type IArcRotateCameraOptions = {

};