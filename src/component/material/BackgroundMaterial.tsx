import { BackgroundMaterial as BabylonBackgroundMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPushMaterialInitial, extendsFrom as _extendsFrom  } from './PushMaterial';

export type IBackgroundMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IBackgroundMaterialProps = IBackgroundMaterialInitial<BabylonBackgroundMaterial>;

export const BackgroundMaterialHOC = (EL: Nullable<React.FC<IBackgroundMaterialProps>>) => {
    return (props: IBackgroundMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { name } = props as any;

        const instanceRef = useRef<any>();

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonBackgroundMaterial(name, scene!);
                console.log(`BackgroundMaterial ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(BackgroundMaterialHOC(e));
}

export const P2PBackgroundMaterial = extendsFrom<IBackgroundMaterialProps>(null);