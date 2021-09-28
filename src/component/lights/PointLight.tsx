import { PointLight as BabylonPointLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IShadowLightInitial } from './ShadowLight';

export type IPointLightInitial<T> = {
    position: Vector3
} & IShadowLightInitial<T>;
export type IPointLightProps = IPointLightInitial<BabylonPointLight>;

export const PointLightHOC = (EL: Nullable<React.FC<IPointLightProps>> ) => {
    return (props: IPointLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPointLight(name, position, scene!);
                console.log('PointLight created');
            }
        }, []);

        return EL && <EL {...props}/>
    }
}