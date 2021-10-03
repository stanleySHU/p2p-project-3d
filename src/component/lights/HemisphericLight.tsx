import { HemisphericLight as BabylonHemisphericLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { ILightInitial, buildExtends as _buildExtends } from './Light';

export type IHemisphericLightInitial<T> = ILightInitial<T> & {
    name: string,
    direction: Vector3
};
export type IHemisphericLightProps = IHemisphericLightInitial<BabylonHemisphericLight> & IHemisphericLightOptions;

function HemisphericLightHOC<T>(EL: React.FC<T>) {
    return (props: T & IHemisphericLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, direction } = props;

        useEffect(() => {
            console.log(`HemisphericLight ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonHemisphericLight(name, direction, scene!);
                console.log(`HemisphericLight ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HemisphericLightHOC(e));
};

export const P2PHemisphericLight = buildExtends<IHemisphericLightProps>(ChildHOC(null));

export type IHemisphericLightOptions = {
    
} 