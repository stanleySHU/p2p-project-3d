import { StereoscopicArcRotateCamera as BabylonStereoscopicArcRotateCamera } from '@babylonjs/core';
import React, {useContext, useEffect } from "react"
import { SceneContext } from "../Scene";
import { IArcRotateCameraInitial, buildExtends as _buildExtends } from "./ArcRotateCamera";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from '../Component';

export type IStereoscopicArcRotateCameraInitial<T> = IArcRotateCameraInitial<T> & {
    interaxialDistance: number,
    isStereoscopicSideBySide: boolean
};
export type IStereoscopicArcRotateCameraProps = IStereoscopicArcRotateCameraInitial<BabylonStereoscopicArcRotateCamera> & IStereoscopicArcRotateCameraOptions;

function StereoscopicArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IStereoscopicArcRotateCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide } = props;

        useEffect(() => {
            console.log(`StereoscopicArcRotateCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonStereoscopicArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, isStereoscopicSideBySide, scene!);
                console.log(`StereoscopicArcRotateCamera ${name} created`);
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