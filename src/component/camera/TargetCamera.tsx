import { TargetCamera as BabylonTargetCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ICameraInitial, extendsFrom as _extendsFrom } from './Camera';

export type ITargetCameraInitial<T> = ICameraInitial<T> & {

};
export type ITargetCameraProps = ITargetCameraInitial<BabylonTargetCamera> & ITargetCameraOptions;

function TargetCameraHOC<T>(EL: Nullable<React.FC<T>>) {
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

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TargetCameraHOC(e));
};

export const P2PTargetCamera = extendsFrom<ITargetCameraProps>(null);

export type ITargetCameraOptions = {
    
}