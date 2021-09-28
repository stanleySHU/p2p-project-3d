import { SpotLight as BabylonSpotLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IShadowLightInitial } from './ShadowLight';

export type ISpotLightInitial<T> = {
    position: Vector3,
    direction: Vector3,
    angle: number,
    exponent: number
} & IShadowLightInitial<T>;
export type ISpotLightProps = ISpotLightInitial<BabylonSpotLight>;

export const SpotLightHOC = (EL: Nullable<React.FC<ISpotLightProps>>) => {
    return (props: ISpotLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, direction, angle, exponent } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonSpotLight(name, position, direction, angle, exponent, scene!);
                console.log('SpotLight created');
            }
        }, [])

        return EL && <EL {...props}/>
    }
}