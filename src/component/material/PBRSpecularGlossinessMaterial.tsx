import { PBRSpecularGlossinessMaterial as BabylonPBRSpecularGlossinessMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IPBRBaseSimpleMaterialInitial, extendsFrom as _extendsFrom } from './PBRBaseSimpleMaterial';

export type IPBRSpecularGlossinessMaterialInitial<T> = IPBRBaseSimpleMaterialInitial<T> & {};
export type IPBRSpecularGlossinessMaterialProps = IPBRSpecularGlossinessMaterialInitial<BabylonPBRSpecularGlossinessMaterial>;

function PBRSpecularGlossinessMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IPBRSpecularGlossinessMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props as any;

        useEffect(() => {
            console.log(`PBRSpecularGlossinessMaterial ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonPBRSpecularGlossinessMaterial(name, scene!);
                console.log(`PBRSpecularGlossinessMaterial ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PBRSpecularGlossinessMaterialHOC(e));
}

export const P2PPBRSpecularGlossinessMaterial = extendsFrom<IPBRSpecularGlossinessMaterialProps>(null);