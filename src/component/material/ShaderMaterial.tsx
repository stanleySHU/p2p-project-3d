import { IShaderMaterialOptions, ShaderMaterial as BabylonShaderMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IMaterialInitial, buildExtends as _buildExtends } from './Material';

export type IShaderMaterialInitial<T> = IMaterialInitial<T> & {
    shaderPath: any,
    options?: Partial<IShaderMaterialOptions>
};
export type IShaderMaterialProps = IShaderMaterialInitial<BabylonShaderMaterial>;

function ShaderMaterialHOC<T>(EL: React.FC<T>) {
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

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ShaderMaterialHOC(e));
}

export const P2PShaderMaterial = buildExtends<IShaderMaterialProps>(ChildHOC(null));