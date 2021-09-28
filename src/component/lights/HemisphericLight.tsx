import { HemisphericLight as BabylonHemisphericLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ILightInitial } from './Light';

export type IHemisphericLightInitial<T> = {
    direction: Vector3
} & ILightInitial<T>;
export type IHemisphericLightProps = IHemisphericLightInitial<BabylonHemisphericLight>;

export const HemisphericLightHOC = (EL: Nullable<React.FC<IHemisphericLightProps>>) => {
    return (props: IHemisphericLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, direction } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonHemisphericLight(name, direction, scene!);
                console.log('HemisphericLight created');
            }
        }, []);

        return EL && <EL {...props}/>
    }
}