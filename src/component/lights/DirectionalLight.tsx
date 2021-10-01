import { DirectionalLight as BabylonDirectionalLight, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IShadowLightInitial, buildExtends as _buildExtends } from './ShadowLight';
 
export type IDirectionalLightInitial<T> = IShadowLightInitial<T> & {
    direction: Vector3
};
export type IDirectionalLightProps = IDirectionalLightInitial<BabylonDirectionalLight> & IDirectionalLightOptions; 

function DirectionalLightHOC<T>(EL:React.FC<T>) {
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
        return <EL {...props}/>
    };
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DirectionalLightHOC(e));
};

export const P2PDirectionalLight = buildExtends<IDirectionalLightProps>(ChildHOC(null));

export type IDirectionalLightOptions = {
    
}