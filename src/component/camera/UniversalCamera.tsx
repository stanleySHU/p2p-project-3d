import { UniversalCamera as BabylonUniversalCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ITouchCameraInitial } from './TouchCamera';

export type IUniversalCameraInitial<T> = {

} & ITouchCameraInitial<T>;
export type IUniversalCameraProps = IUniversalCameraInitial<BabylonUniversalCamera>;

export const UniversalCameraHOC = (EL: Nullable<React.FC<IUniversalCameraProps>>) => {
    return (props: IUniversalCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonUniversalCamera(name, position, scene!);
                console.log('UniversalCamera created');
            }
        }, []);

        return EL &&  <EL {...props}/>
    };
};