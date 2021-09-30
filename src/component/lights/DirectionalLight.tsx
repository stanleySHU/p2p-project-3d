import { DirectionalLight as BabylonDirectionalLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IShadowLightInitial, extendsFrom as _extendsFrom } from './ShadowLight';
 
export type IDirectionalLightInitial<T> = IShadowLightInitial<T> & {
    direction: Vector3
};
export type IDirectionalLightProps = IDirectionalLightInitial<BabylonDirectionalLight> & IDirectionalLightOptions; 

function DirectionalLightHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IDirectionalLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, direction } = props;
        
        useEffect(() => {
            console.log(`DirectionalLight ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonDirectionalLight(name, direction, scene!);
                console.log(`DirectionalLight ${name} created`);
            }
        }, [])
        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    };
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(DirectionalLightHOC(e));
};

export const P2PDirectionalLight = extendsFrom<IDirectionalLightProps>(null);

export type IDirectionalLightOptions = {
    
}