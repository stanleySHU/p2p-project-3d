import { UniversalCamera as BabylonUniversalCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { ITouchCameraInitial, buildExtends as _buildExtends } from './TouchCamera';

export type IUniversalCameraInitial<T> = ITouchCameraInitial<T> & {

};
export type IUniversalCameraProps = IUniversalCameraInitial<BabylonUniversalCamera> & IUniversalCameraOptions;

function UniversalCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IUniversalCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, position } = props;

        useEffect(() => {
            console.log(`UniversalCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonUniversalCamera(name, position, scene!);
                console.log(`UniversalCamera ${name} created`);
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