import { PushMaterial as BabylonPushMaterial } from '@babylonjs/core';import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IMaterialInitial, extendsFrom as _extendsFrom } from './Material';

export type IPushMaterialInitial<T> = IMaterialInitial<T> & {};
export type IPushMaterialProps = IPushMaterialInitial<BabylonPushMaterial>;

export const PushMaterialHOC = (EL: Nullable<React.FC<IPushMaterialProps>>) => {
    return (props: IPushMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { name } = props as any;

        const instanceRef = useRef<any>();

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPushMaterial(name, scene!);
                console.log(`PushMaterial ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PushMaterialHOC(e));
}

export const P2PPushMaterial = extendsFrom<IPushMaterialProps>(null);