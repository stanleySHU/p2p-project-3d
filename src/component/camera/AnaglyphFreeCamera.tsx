import { AnaglyphFreeCamera as BabylonAnaglyphFreeCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from "react";
import { SceneContext } from "../Scene";
import { IFreeCameraInitial, buildExtends as _buildExtends } from "./FreeCamera";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from '../Component';

export type IAnaglyphFreeCameraInitial<T> = IFreeCameraInitial<T> & {
    interaxialDistance: number
};
export type IAnaglyphFreeCameraProps = IAnaglyphFreeCameraInitial<BabylonAnaglyphFreeCamera> & IAnaglyphFreeCameraOptions;

function AnaglyphFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IAnaglyphFreeCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, interaxialDistance } = props;

        useEffect(() => {
            console.log(`AnaglyphFreeCamera ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonAnaglyphFreeCamera(name, position, interaxialDistance, scene!);
                console.log(`AnaglyphFreeCamera ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };  
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AnaglyphFreeCameraHOC(e));
};

export const P2PAnaglyphFreeCamera = buildExtends<IAnaglyphFreeCameraProps>(ChildHOC(null));

export type IAnaglyphFreeCameraOptions = {
    
}