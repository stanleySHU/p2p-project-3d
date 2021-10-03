import { DirectionalLight as BabylonDirectionalLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IShadowLightInitial, buildExtends as _buildExtends } from './ShadowLight';
 
export type IDirectionalLightInitial<T> = IShadowLightInitial<T> & {
    name: string,
    direction: Vector3
};
export type IDirectionalLightProps = IDirectionalLightInitial<BabylonDirectionalLight> & IDirectionalLightOptions; 

function DirectionalLightHOC<T>(EL:React.FC<T>) {
    return (props: T & IDirectionalLightProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, direction } = props;
        
        useEffect(() => {
            console.log(`DirectionalLight ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonDirectionalLight(name, direction, scene!);
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