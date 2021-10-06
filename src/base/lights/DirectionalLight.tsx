import { DirectionalLight as BabylonDirectionalLight, Vector3 } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IShadowLightInitial, buildExtends as _buildExtends } from './ShadowLight';
 
export type IDirectionalLightInitial<T> = IShadowLightInitial<T> & {
    name: string,
    direction: Vector3
};
export type IDirectionalLightProps = IDirectionalLightInitial<BabylonDirectionalLight> & IDirectionalLightOptions; 

function DirectionalLightHOC<T>(EL:React.FC<T>) {
    return (props: T & IDirectionalLightProps) => {
        const { scene, instance, name, direction } = props;
        
        useEffect(() => {
            console.log(`DirectionalLight ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonDirectionalLight(name, direction, scene);
                console.log(`DirectionalLight ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    };
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DirectionalLightHOC(e));
};

export const P2PDirectionalLight = buildExtends<IDirectionalLightProps>(ChildHOC(null));

export type IDirectionalLightOptions = {
    
}