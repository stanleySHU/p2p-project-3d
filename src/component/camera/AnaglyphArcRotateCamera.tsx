import { AnaglyphArcRotateCamera as BabylonAnaglyphArcRotateCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IArcRotateCameraInitial, buildExtends as _buildExtends } from './ArcRotateCamera';

export type IAnaglyphArcRotateCameraInitial<T> = IArcRotateCameraInitial<T> & {
    name: string,
    interaxialDistance: number
};
export type IAnaglyphArcRotateCameraProps = IAnaglyphArcRotateCameraInitial<BabylonAnaglyphArcRotateCamera> & IAnaglyphArcRotateCameraOptions;

function AnaglyphArcRotateCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IAnaglyphArcRotateCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, alpha, beta, radius, target, interaxialDistance } = props;

        useEffect(() => {
            console.log(`AnaglyphArcRotateCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonAnaglyphArcRotateCamera(name, alpha, beta, radius, target, interaxialDistance, scene!);
                console.log(`AnaglyphArcRotateCamera ${name} created`);
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