import { PushMaterial as BabylonPushMaterial } from '@babylonjs/core';import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IMaterialInitial, extendsFrom as _extendsFrom } from './Material';

export type IPushMaterialInitial<T> = IMaterialInitial<T> & {};
export type IPushMaterialProps = IPushMaterialInitial<BabylonPushMaterial>;

function PushMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IPushMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props as any;

        useEffect(() => {
            console.log(`PushMaterial ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPushMaterial(name, scene!);
                console.log(`PushMaterial ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PushMaterialHOC(e));
}

export const P2PPushMaterial = extendsFrom<IPushMaterialProps>(null);