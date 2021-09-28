import { TargetCamera as BabylonTargetCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ICameraInitial } from './Camera';

export type ITargetCameraInitial<T> = {

} & ICameraInitial<T>;
export type ITargetCameraProps = ITargetCameraInitial<BabylonTargetCamera>;

export const TargetCameraHOC = (EL: Nullable<React.FC<ITargetCameraProps>>) => {
    return (props: ITargetCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonTargetCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log('TargetCamera created');
            }
        }, []);

        return EL && <EL {...props}/>
    }
}