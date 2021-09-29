import { TouchCamera as BabylonTouchCamera} from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IFreeCameraInitial, extendsFrom as _extendsFrom } from './FreeCamera';

export type ITouchCameraInitial<T> = IFreeCameraInitial<T> & {

};
export type ITouchCameraProps = ITouchCameraInitial<BabylonTouchCamera> & ITouchCameraOptions;

export const TouchCameraHOC = (EL: Nullable<React.FC<ITouchCameraProps>>) => {
    return (props: ITouchCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonTouchCamera(name, position, scene!);
                console.log(`TouchCamera ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TouchCameraHOC(e));
};

export const P2PTouchCamera = extendsFrom<ITouchCameraProps>(null);

export type ITouchCameraOptions = {
    
}