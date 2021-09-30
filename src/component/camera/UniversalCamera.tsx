import { UniversalCamera as BabylonUniversalCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ITouchCameraInitial, extendsFrom as _extendsFrom } from './TouchCamera';

export type IUniversalCameraInitial<T> = ITouchCameraInitial<T> & {

};
export type IUniversalCameraProps = IUniversalCameraInitial<BabylonUniversalCamera> & IUniversalCameraOptions;

function UniversalCameraHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IUniversalCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            console.log(`UniversalCamera ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonUniversalCamera(name, position, scene!);
                console.log(`UniversalCamera ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    };
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(UniversalCameraHOC(e));
};

export const P2PUniversalCamera = extendsFrom<IUniversalCameraProps>(null);

export type IUniversalCameraOptions = {
    
}