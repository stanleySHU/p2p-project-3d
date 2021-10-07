import { AnaglyphFreeCamera as BabylonAnaglyphFreeCamera } from '@babylonjs/core';
import React, { useEffect } from "react";
import { IFreeCameraInitial, buildExtends as _buildExtends } from "./FreeCamera";
import { ChildHOC } from '../Component';

export type IAnaglyphFreeCameraInitial<T> = IFreeCameraInitial<T> & {
    name: string,
    interaxialDistance: number
};
export type IAnaglyphFreeCameraProps = IAnaglyphFreeCameraInitial<BabylonAnaglyphFreeCamera> & IAnaglyphFreeCameraOptions;

function AnaglyphFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IAnaglyphFreeCameraProps) => {
        const { scene, instance, name, position, interaxialDistance } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonAnaglyphFreeCamera(name, position, interaxialDistance, scene);
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