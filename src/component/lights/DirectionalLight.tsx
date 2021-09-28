import { DirectionalLight as BabylonDirectionalLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IShadowLightInitial } from './ShadowLight';
 
export type IDirectionalLightInitial<T> = {
    direction: Vector3
} & IShadowLightInitial<T>;
export type IDirectionalLightProps = IDirectionalLightInitial<BabylonDirectionalLight>; 

export const DirectionalLightHOC = (EL: Nullable<React.FC<IDirectionalLightProps>>) => {
    return (props: IDirectionalLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, direction } = props;
        
        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonDirectionalLight(name, direction, scene!);
                console.log('DirectionalLight created');
            }
        }, [])
        return EL && <EL {...props}/>
    };
};
