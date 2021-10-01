import { ArcRotateCamera as BabylonArcRotateCamera, Vector3 } from '@babylonjs/core'
import React, {useContext, useEffect } from "react"
import { SceneContext } from "../Scene";
import { ITargetCameraInitial, buildExtends as _buildExtends } from "./TargetCamera";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from '../Component';

export type IArcRotateCameraInitial<T> = ITargetCameraInitial<T> & {
    alpha: number,
    beta: number,
    radius: number,
    target: Vector3,
};
export type IArcRotateCameraProps = IArcRotateCameraInitial<BabylonArcRotateCamera> & IArcRotateCameraOptions;

function ArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IArcRotateCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, alpha, beta, radius, target, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`ArcRotateCamera ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonArcRotateCamera(name, alpha, beta, radius, target, scene!, setActiveOnSceneIfNoneActive);
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