import { TouchCamera as BabylonTouchCamera} from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IFreeCameraInitial, buildExtends as _buildExtends } from './FreeCamera';

export type ITouchCameraInitial<T> = IFreeCameraInitial<T> & {

};
export type ITouchCameraProps = ITouchCameraInitial<BabylonTouchCamera> & ITouchCameraOptions;

function TouchCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ITouchCameraProps) => {
        const { scene, instance, name, position } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonTouchCamera(name, position, scene);
            }
        }, []);

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TouchCameraHOC(e));
};

export const P2PTouchCamera = buildExtends<ITouchCameraProps>(ChildHOC(null));

export type ITouchCameraOptions = {
    
}