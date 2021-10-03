import { VirtualJoysticksCamera as BabylonVirtualJoysticksCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from "react";
import { SceneContext } from "../Scene";
import { IFreeCameraInitial, buildExtends as _buildExtends } from "./FreeCamera";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from '../Component';

export type IVirtualJoysticksCameraInitial<T> = IFreeCameraInitial<T> & {};
export type IVirtualJoysticksCameraProps = IVirtualJoysticksCameraInitial<BabylonVirtualJoysticksCamera> & IVirtualJoysticksCameraOptions;

function VirtualJoysticksCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IVirtualJoysticksCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, position } = props;

        useEffect(() => {
            console.log(`VirtualJoysticksCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonVirtualJoysticksCamera(name, position, scene!);
                console.log(`VirtualJoysticksCamera ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };  
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VirtualJoysticksCameraHOC(e));
};

export const P2PVirtualJoysticksCamera = buildExtends<IVirtualJoysticksCameraProps>(ChildHOC(null));

export type IVirtualJoysticksCameraOptions = {}