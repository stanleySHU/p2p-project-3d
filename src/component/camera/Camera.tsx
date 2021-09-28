import { Camera as BabylonCamera, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { INodeInitial } from '../Node/Node';
import { SceneContext } from '../Scene';

export type ICameraInitial<T> = {
    position: Vector3,
    setActiveOnSceneIfNoneActive?: boolean
} & INodeInitial<T>;
export type ICameraProps = ICameraInitial<BabylonCamera>

export const CameraHOC = (EL: Nullable<React.FC<ICameraProps>>) => {
    return (props: ICameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log('camera created');
            }
        }, []);
        
        return EL && <EL {...props}/>;
    }
}