import { StandardMaterial as BabylonStandardMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPushMaterialInitial, extendsFrom as _extendsFrom } from './PushMaterial';

export type IStandardMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IStandardMaterialProps = IStandardMaterialInitial<BabylonStandardMaterial>;

export const StandardMaterialHOC = (EL: Nullable<React.FC<IStandardMaterialProps>>) => {
    return (props: IStandardMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { name } = props as any;

        const instanceRef = useRef<any>();

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