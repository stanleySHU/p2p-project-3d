import { MultiMaterial as BabylonMultiMaterial } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IMaterialInitial, buildExtends as _buildExtends  } from './Material';

export type IMultiMaterialInitial<T> = IMaterialInitial<T> & {};
export type IMultiMaterialProps = IMultiMaterialInitial<BabylonMultiMaterial>;

function MultiMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiMaterialProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`MultiMaterial ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonMultiMaterial(name, scene);
                console.log(`MultiMaterial ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiMaterialHOC(e));
}

export const P2PMultiMaterial = buildExtends<IMultiMaterialProps>(ChildHOC(null));