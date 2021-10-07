import { StereoscopicArcRotateCamera as BabylonStereoscopicArcRotateCamera } from '@babylonjs/core';
import React, { useEffect } from "react"
import { IArcRotateCameraInitial, buildExtends as _buildExtends } from "./ArcRotateCamera";
import { ChildHOC } from '../Component';

export type IStereoscopicArcRotateCameraInitial<T> = IArcRotateCameraInitial<T> & {
    interaxialDistance: number,
    isStereoscopicSideBySide: boolean
};
export type IStereoscopicArcRotateCameraProps = IStereoscopicArcRotateCameraInitial<BabylonStereoscopicArcRotateCamera> & IStereoscopicArcRotateCameraOptions;

function StereoscopicArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IStereoscopicArcRotateCameraProps) => {
        const { scene, instance, name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonStereoscopicArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene);
            }
        }, []);
        
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StereoscopicArcRotateCameraHOC(e));
};

export const P2PStereoscopicArcRotateCamera = buildExtends<IStereoscopicArcRotateCameraProps>(ChildHOC(null));

export type IStereoscopicArcRotateCameraOptions = {};