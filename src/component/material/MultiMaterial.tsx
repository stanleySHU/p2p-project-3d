import { MultiMaterial as BabylonMultiMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IMaterialInitial, buildExtends as _buildExtends  } from './Material';

export type IMultiMaterialInitial<T> = IMaterialInitial<T> & {};
export type IMultiMaterialProps = IMultiMaterialInitial<BabylonMultiMaterial>;

function MultiMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`MultiMaterial ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonMultiMaterial(name, scene!);
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