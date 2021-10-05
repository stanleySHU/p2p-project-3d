import { StereoscopicFreeCamera as BabylonStereoscopicFreeCamera } from '@babylonjs/core';
import React, { useEffect } from "react";
import { IFreeCameraInitial, buildExtends as _buildExtends } from "./FreeCamera";
import { ChildHOC } from '../Component';

export type IStereoscopicFreeCameraInitial<T> = IFreeCameraInitial<T> & {
    interaxialDistance: number,
    isStereoscopicSideBySide: boolean
};
export type IStereoscopicFreeCameraProps = IStereoscopicFreeCameraInitial<BabylonStereoscopicFreeCamera> & IStereoscopicFreeCameraOptions;

function StereoscopicFreeCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IStereoscopicFreeCameraProps) => {
        const { scene, instance, name, position, interaxialDistance, isStereoscopicSideBySide } = props;

        useEffect(() => {
            console.log(`StereoscopicFreeCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonStereoscopicFreeCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene);
                console.log(`StereoscopicFreeCamera ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };  
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StereoscopicFreeCameraHOC(e));
};

export const P2PStereoscopicFreeCamera = buildExtends<IStereoscopicFreeCameraProps>(ChildHOC(null));

export type IStereoscopicFreeCameraOptions = {}