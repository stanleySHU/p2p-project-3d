import { TargetCamera as BabylonTargetCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ICameraInitial, extendsFrom as _extendsFrom } from './Camera';

export type ITargetCameraInitial<T> = {

} & ICameraInitial<T>;
export type ITargetCameraProps = ITargetCameraInitial<BabylonTargetCamera> & ITargetCameraOptions;

export const TargetCameraHOC = (EL: Nullable<React.FC<ITargetCameraProps>>) => {
    return (props: ITargetCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonTargetCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log(`TargetCamera ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TargetCameraHOC(e));
};

export const P2PTargetCamera = extendsFrom<ITargetCameraProps>(null);

export type ITargetCameraOptions = {
    
}