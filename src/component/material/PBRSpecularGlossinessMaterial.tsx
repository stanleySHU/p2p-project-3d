import { PBRSpecularGlossinessMaterial as BabylonPBRSpecularGlossinessMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPBRBaseSimpleMaterialInitial, extendsFrom as _extendsFrom } from './PBRBaseSimpleMaterial';

export type IPBRSpecularGlossinessMaterialInitial<T> = IPBRBaseSimpleMaterialInitial<T> & {};
export type IPBRSpecularGlossinessMaterialProps = IPBRSpecularGlossinessMaterialInitial<BabylonPBRSpecularGlossinessMaterial>;

export const PBRSpecularGlossinessMaterialHOC = (EL: Nullable<React.FC<IPBRSpecularGlossinessMaterialProps>>) => {
    return (props: IPBRSpecularGlossinessMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { name } = props as any;

        const instanceRef = useRef<any>();

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPBRSpecularGlossinessMaterial(name, scene!);
                console.log(`PBRSpecularGlossinessMaterial ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PBRSpecularGlossinessMaterialHOC(e));
}

export const P2PPBRSpecularGlossinessMaterial = extendsFrom<IPBRSpecularGlossinessMaterialProps>(null);