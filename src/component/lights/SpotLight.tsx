import { SpotLight as BabylonSpotLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IShadowLightInitial, buildExtends as _buildExtends } from './ShadowLight';

export type ISpotLightInitial<T> = IShadowLightInitial<T> & {
    position: Vector3,
    direction: Vector3,
    angle: number,
    exponent: number
};
export type ISpotLightProps = ISpotLightInitial<BabylonSpotLight> & ISpotLightOptions;

function SpotLightHOC<T>(EL: React.FC<T>) {
    return (props: T & ISpotLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, position, direction, angle, exponent } = props;

        useEffect(() => {
            console.log(`SpotLight ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonSpotLight(name, position, direction, angle, exponent, scene!);
                console.log(`SpotLight ${name} created`);
            }
        }, [])

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SpotLightHOC(e));
};

export const P2PSpotLight = buildExtends<ISpotLightProps>(ChildHOC(null));

export type ISpotLightOptions = {
    
}