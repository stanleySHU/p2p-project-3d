import { TargetCamera as BabylonTargetCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { ICameraInitial, buildExtends as _buildExtends } from './Camera';

export type ITargetCameraInitial<T> = ICameraInitial<T> & {};
export type ITargetCameraProps = ITargetCameraInitial<BabylonTargetCamera> & ITargetCameraOptions;

function TargetCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ITargetCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`TargetCamera ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonTargetCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log(`TargetCamera ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TargetCameraHOC(e));
};

export const P2PTargetCamera = buildExtends<ITargetCameraProps>(ChildHOC(null));

export type ITargetCameraOptions = {
    
}