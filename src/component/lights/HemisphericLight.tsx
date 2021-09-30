import { HemisphericLight as BabylonHemisphericLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ILightInitial, extendsFrom as _extendsFrom } from './Light';

export type IHemisphericLightInitial<T> = ILightInitial<T> & {
    direction: Vector3
};
export type IHemisphericLightProps = IHemisphericLightInitial<BabylonHemisphericLight> & IHemisphericLightOptions;

function HemisphericLightHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IHemisphericLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, direction } = props;

        useEffect(() => {
            console.log(`HemisphericLight ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonHemisphericLight(name, direction, scene!);
                console.log(`HemisphericLight ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(HemisphericLightHOC(e));
};

export const P2PHemisphericLight = extendsFrom<IHemisphericLightProps>(null);

export type IHemisphericLightOptions = {
    
} 