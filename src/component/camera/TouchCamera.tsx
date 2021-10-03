import { TouchCamera as BabylonTouchCamera} from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IFreeCameraInitial, buildExtends as _buildExtends } from './FreeCamera';

export type ITouchCameraInitial<T> = IFreeCameraInitial<T> & {

};
export type ITouchCameraProps = ITouchCameraInitial<BabylonTouchCamera> & ITouchCameraOptions;

function TouchCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ITouchCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, position } = props;

        useEffect(() => {
            console.log(`TouchCamera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonTouchCamera(name, position, scene!);
                console.log(`TouchCamera ${name} created`);
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