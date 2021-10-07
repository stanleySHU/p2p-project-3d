import { AnaglyphArcRotateCamera as BabylonAnaglyphArcRotateCamera } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IArcRotateCameraInitial, buildExtends as _buildExtends } from './ArcRotateCamera';

export type IAnaglyphArcRotateCameraInitial<T> = IArcRotateCameraInitial<T> & {
    name: string,
    interaxialDistance: number
};
export type IAnaglyphArcRotateCameraProps = IAnaglyphArcRotateCameraInitial<BabylonAnaglyphArcRotateCamera> & IAnaglyphArcRotateCameraOptions;

function AnaglyphArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IAnaglyphArcRotateCameraProps) => {
        const { scene, instance, name, alpha, beta, radius, target, interaxialDistance } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonAnaglyphArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, scene);
            }
        }, []);

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AnaglyphArcRotateCameraHOC(e));
};

export const P2PAnaglyphArcRotateCamera = buildExtends<IAnaglyphArcRotateCameraProps>(ChildHOC(null));

export type IAnaglyphArcRotateCameraOptions = {
    
}