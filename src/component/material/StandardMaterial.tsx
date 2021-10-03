import { StandardMaterial as BabylonStandardMaterial } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IPushMaterialInitial, buildExtends as _buildExtends } from './PushMaterial';

export type IStandardMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IStandardMaterialProps = IStandardMaterialInitial<BabylonStandardMaterial>;

function StandardMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IStandardMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`StandardMaterial ${name} called`);
            if (instance && !instance.current) {
                let material = new BabylonStandardMaterial(name, scene!);
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