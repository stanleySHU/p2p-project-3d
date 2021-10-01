import { PBRSpecularGlossinessMaterial as BabylonPBRSpecularGlossinessMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IPBRBaseSimpleMaterialInitial, buildExtends as _buildExtends } from './PBRBaseSimpleMaterial';

export type IPBRSpecularGlossinessMaterialInitial<T> = IPBRBaseSimpleMaterialInitial<T> & {};
export type IPBRSpecularGlossinessMaterialProps = IPBRSpecularGlossinessMaterialInitial<BabylonPBRSpecularGlossinessMaterial>;

function PBRSpecularGlossinessMaterialHOC<T>(EL: React.FC<T>) {
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

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PBRSpecularGlossinessMaterialHOC(e));
}

export const P2PPBRSpecularGlossinessMaterial = buildExtends<IPBRSpecularGlossinessMaterialProps>(ChildHOC(null));