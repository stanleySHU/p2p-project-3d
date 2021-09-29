import { Camera as BabylonCamera, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { INodeInitial, extendsFrom as _extendsFrom } from '../node/Node';
import { SceneContext } from '../Scene';

export type ICameraInitial<T> = {
    position: Vector3,
    setActiveOnSceneIfNoneActive?: boolean
} & INodeInitial<T>;
export type ICameraProps = ICameraInitial<BabylonCamera> & ICameraOptions;

export const CameraHOC = (EL: Nullable<React.FC<ICameraProps>>) => {
    return (props: ICameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log(`camera ${name} created`);
            }
        }, []);
        
        return EL && <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(CameraHOC(e));
};

export const P2PCamera = extendsFrom<ICameraProps>(null);

export type ICameraOptions = {
    
}