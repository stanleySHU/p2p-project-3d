import { UniversalCamera as BabylonUniversalCamera } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { ITouchCameraInitial, buildExtends as _buildExtends } from './TouchCamera';

export type IUniversalCameraInitial<T> = ITouchCameraInitial<T> & {

};
export type IUniversalCameraProps = IUniversalCameraInitial<BabylonUniversalCamera> & IUniversalCameraOptions;

function UniversalCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IUniversalCameraProps) => {
        const { scene, instance, name, position } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonUniversalCamera(name, position, scene);
            }
        }, []);

        return <EL {...props}/>
    };
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(UniversalCameraHOC(e));
};

export const P2PUniversalCamera = buildExtends<IUniversalCameraProps>(ChildHOC(null));

export type IUniversalCameraOptions = {
    
}