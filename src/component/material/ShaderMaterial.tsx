import { IShaderMaterialOptions, ShaderMaterial as BabylonShaderMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IMaterialInitial, extendsFrom as _extendsFrom } from './Material';

export type IShaderMaterialInitial<T> = IMaterialInitial<T> & {
    shaderPath: any,
    options?: Partial<IShaderMaterialOptions>
};
export type IShaderMaterialProps = IShaderMaterialInitial<BabylonShaderMaterial>;

function ShaderMaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IShaderMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, shaderPath, options } = props as any;

        useEffect(() => {
            console.log(`ShaderMaterial ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonShaderMaterial(name, scene!, shaderPath, options);
                console.log(`ShaderMaterial ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    };
} 

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(ShaderMaterialHOC(e));
}

export const P2PShaderMaterial = extendsFrom<IShaderMaterialProps>(null);