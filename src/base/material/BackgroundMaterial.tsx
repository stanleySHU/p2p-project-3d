import { BackgroundMaterial as BabylonBackgroundMaterial } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IPushMaterialInitial, buildExtends as _buildExtends  } from './PushMaterial';

export type IBackgroundMaterialInitial<T> = IPushMaterialInitial<T> & {
    name: string,
};
export type IBackgroundMaterialProps = IBackgroundMaterialInitial<BabylonBackgroundMaterial>;

function BackgroundMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IBackgroundMaterialProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonBackgroundMaterial(name, scene);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BackgroundMaterialHOC(e));
}

export const P2PBackgroundMaterial = buildExtends<IBackgroundMaterialProps>(ChildHOC(null));