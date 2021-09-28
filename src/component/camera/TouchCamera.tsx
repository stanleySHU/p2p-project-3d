import { TouchCamera as BabylonTouchCamera} from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IFreeCameraInitial } from './FreeCamera';

export type ITouchCameraInitial<T> = {

} & IFreeCameraInitial<T>;
export type ITouchCameraProps = ITouchCameraInitial<BabylonTouchCamera>;

export const TouchCameraHOC = (EL: Nullable<React.FC<ITouchCameraProps>>) => {
    return (props: ITouchCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonTouchCamera(name, position, scene!);
                console.log('TouchCamera created');
            }
        }, []);

        return EL &&  <EL {...props}/>
    }
}