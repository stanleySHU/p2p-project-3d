import { PointLight as BabylonPointLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IShadowLightInitial, buildExtends as _buildExtends } from './ShadowLight';

export type IPointLightInitial<T> = IShadowLightInitial<T> & {
    name: string,
    position: Vector3
};
export type IPointLightProps = IPointLightInitial<BabylonPointLight> & IPointLightOptions;

function PointLightHOC<T>(EL: React.FC<T> ) {
    return (props: T & IPointLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, position } = props;

        useEffect(() => {
            console.log(`PointLight ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonPointLight(name, position, scene!);
                console.log(`PointLight ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PointLightHOC(e));
};

export const P2PPointLight = buildExtends<IPointLightProps>(ChildHOC(null));

export type IPointLightOptions = {
    
}