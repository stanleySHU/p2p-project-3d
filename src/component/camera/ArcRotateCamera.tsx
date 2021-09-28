import React, {useContext, useEffect } from "react"
import { ArcRotateCamera as BabylonArcRotateCamera, Vector3 } from '@babylonjs/core'
import { SceneContext } from "../Scene";
import { ITargetCameraInitial } from "./TargetCamera";
import { Nullable } from "../../utils/customType";

export type IArcRotateCameraInitial<T> = {
    alpha: number,
    beta: number,
    radius: number,
    target: Vector3,
} & ITargetCameraInitial<T>;
export type IArcRotateCameraProps = IArcRotateCameraInitial<BabylonArcRotateCamera>;

export const ArcRotateCameraHOC = (EL: Nullable<React.FC<IArcRotateCameraProps>>) => {
    return (props: IArcRotateCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, alpha, beta, radius, target, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonArcRotateCamera(name, alpha, beta, radius, target, scene!, setActiveOnSceneIfNoneActive);
                console.log('ArcRotateCamera created');
            }
        }, []);
        return EL && <EL {...props}/>
    }
}

export const P2PRotateCamera = ArcRotateCameraHOC(null);