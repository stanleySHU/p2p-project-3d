import React, {useContext, useEffect } from "react"
import { ArcRotateCamera as BabylonArcRotateCamera, Vector3 } from '@babylonjs/core'
import { SceneContext } from "../Scene";
import { ITargetCameraInitial, extendsFrom as _extendsFrom } from "./TargetCamera";
import { Nullable } from "../../utils/customType";

export type IArcRotateCameraInitial<T> = ITargetCameraInitial<T> & {
    alpha: number,
    beta: number,
    radius: number,
    target: Vector3,
};
export type IArcRotateCameraProps = IArcRotateCameraInitial<BabylonArcRotateCamera> & IArcRotateCameraOptions;

function ArcRotateCameraHOC<T>(EL: Nullable<React.FC<T>>) {
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
        
        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(ArcRotateCameraHOC(e));
};

export const P2PArcRotateCamera = extendsFrom<IArcRotateCameraProps>(null);

export type IArcRotateCameraOptions = {

};