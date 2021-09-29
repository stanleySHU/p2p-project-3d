import { HemisphericLight as BabylonHemisphericLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ILightInitial, extendsFrom as _extendsFrom } from './Light';

export type IHemisphericLightInitial<T> = {
    direction: Vector3
} & ILightInitial<T>;
export type IHemisphericLightProps = IHemisphericLightInitial<BabylonHemisphericLight> & IHemisphericLightOptions;

export const HemisphericLightHOC = (EL: Nullable<React.FC<IHemisphericLightProps>>) => {
    return (props: IHemisphericLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, direction } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonHemisphericLight(name, direction, scene!);
                console.log(`HemisphericLight ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(HemisphericLightHOC(e));
};

export const P2PHemisphericLight = extendsFrom<IHemisphericLightProps>(null);

export type IHemisphericLightOptions = {
    
} 