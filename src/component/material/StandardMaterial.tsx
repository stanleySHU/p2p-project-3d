import { StandardMaterial as BabylonStandardMaterial } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IPushMaterialInitial, buildExtends as _buildExtends } from './PushMaterial';

export type IStandardMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IStandardMaterialProps = IStandardMaterialInitial<BabylonStandardMaterial>;

function StandardMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IStandardMaterialProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`StandardMaterial ${name} called`);
            if (instance && !instance.current) {
                let material = new BabylonStandardMaterial(name, scene);
                instance.current = material;
                console.log(`StandardMaterial ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StandardMaterialHOC(e));
}

export const P2PStandardMaterial = buildExtends<IStandardMaterialProps>(ChildHOC(null));