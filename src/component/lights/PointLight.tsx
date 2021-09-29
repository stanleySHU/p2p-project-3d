import { PointLight as BabylonPointLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IShadowLightInitial, extendsFrom as _extendsFrom } from './ShadowLight';

export type IPointLightInitial<T> = IShadowLightInitial<T> & {
    position: Vector3
};
export type IPointLightProps = IPointLightInitial<BabylonPointLight> & IPointLightOptions;

export const PointLightHOC = (EL: Nullable<React.FC<IPointLightProps>> ) => {
    return (props: IPointLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPointLight(name, position, scene!);
                console.log(`PointLight ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PointLightHOC(e));
};

export const P2PPointLight = extendsFrom<IPointLightProps>(null);

export type IPointLightOptions = {
    
}