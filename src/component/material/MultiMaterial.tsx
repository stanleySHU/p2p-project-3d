import { MultiMaterial as BabylonMultiMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IMaterialInitial, extendsFrom as _extendsFrom  } from './Material';

export type IMultiMaterialInitial<T> = IMaterialInitial<T> & {};
export type IMultiMaterialProps = IMultiMaterialInitial<BabylonMultiMaterial>;

function MultiMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IMultiMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props as any;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonMultiMaterial(name, scene!);
                console.log(`MultiMaterial ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(MultiMaterialHOC(e));
}

export const P2PMultiMaterial = extendsFrom<IMultiMaterialProps>(null);