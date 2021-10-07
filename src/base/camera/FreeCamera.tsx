import { FreeCamera as BabylonFreeCamera, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from "react";
import { ITargetCameraInitial, buildExtends as _buildExtends } from "./TargetCamera";
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';

export type IFreeCameraInitial<T> = ITargetCameraInitial<T> & {};
export type IFreeCameraProps = IFreeCameraInitial<BabylonFreeCamera> & IFreeCameraOptions;

function FreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IFreeCameraProps) => {
        const { canvas } = useContext(EngineContext);
        const { scene, instance, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonFreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);
                instance.current.setTarget(new Vector3(0, 0, 0));
                instance.current.attachControl(canvas, true);
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