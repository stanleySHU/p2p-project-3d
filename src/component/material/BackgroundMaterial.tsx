import { BackgroundMaterial as BabylonBackgroundMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPushMaterialInitial, extendsFrom as _extendsFrom  } from './PushMaterial';

export type IBackgroundMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IBackgroundMaterialProps = IBackgroundMaterialInitial<BabylonBackgroundMaterial>;

function BackgroundMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IBackgroundMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props as any;

        useEffect(() => {
            console.log(`BackgroundMaterial ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonBackgroundMaterial(name, scene!);
                console.log(`BackgroundMaterial ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(BackgroundMaterialHOC(e));
}

export const P2PBackgroundMaterial = extendsFrom<IBackgroundMaterialProps>(null);