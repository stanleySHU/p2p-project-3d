import React, { useContext, useEffect } from "react";
import { SceneContext } from "../Scene";
import { FreeCamera as BabylonFreeCamera, Vector3} from '@babylonjs/core';
import { ITargetCameraInitial, extendsFrom as _extendsFrom } from "./TargetCamera";
import { Nullable } from "../../utils/customType";
import { EngineContext } from "../Engine";

export type IFreeCameraInitial<T> = ITargetCameraInitial<T> & {
    
};
export type IFreeCameraProps = IFreeCameraInitial<BabylonFreeCamera> & IFreeCameraOptions;

function FreeCameraHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IFreeCameraProps) => {
        const { canvas } = useContext(EngineContext);
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonFreeCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                instanceRef.current.setTarget(Vector3.Zero())
                instanceRef.current.attachControl(canvas, true);
                console.log(`FreeCamera ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };  
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(FreeCameraHOC(e));
};

export const P2PFreeCamera = extendsFrom<IFreeCameraProps>(null);

export type IFreeCameraOptions = {
    
}