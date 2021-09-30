import { StandardMaterial as BabylonStandardMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPushMaterialInitial, extendsFrom as _extendsFrom } from './PushMaterial';

export type IStandardMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IStandardMaterialProps = IStandardMaterialInitial<BabylonStandardMaterial>;

function StandardMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IStandardMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props as any;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonStandardMaterial(name, scene!);
                console.log(`StandardMaterial ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(StandardMaterialHOC(e));
}

export const P2PStandardMaterial = extendsFrom<IStandardMaterialProps>(null);