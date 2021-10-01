import { FreeCamera as BabylonFreeCamera} from '@babylonjs/core';
import React, { useContext, useEffect } from "react";
import { SceneContext } from "../Scene";
import { ITargetCameraInitial, buildExtends as _buildExtends } from "./TargetCamera";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from '../Component';

export type IFreeCameraInitial<T> = ITargetCameraInitial<T> & {};
export type IFreeCameraProps = IFreeCameraInitial<BabylonFreeCamera> & IFreeCameraOptions;

function FreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IFreeCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`FreeCamera ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonFreeCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log(`FreeCamera ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };  
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FreeCameraHOC(e));
};

export const P2PFreeCamera = buildExtends<IFreeCameraProps>(ChildHOC(null));

export type IFreeCameraOptions = {}