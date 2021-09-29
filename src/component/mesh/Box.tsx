import { Color4, Mesh as BabylonMesh, MeshBuilder, Vector4 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { IMeshInitial, extendsFrom as _extendsFrom } from './Mesh';

export type IBoxInitial<T> = {
    size?: number,
    width?: number,
    height?: number,
    depth?: number,
    faceUV?: Vector4[],
    faceColors?: Color4[],
    sideOrientation?: number,
    frontUVs?: Vector4,
    backUVs?: Vector4,
    wrap?: boolean,
    topBaseAt?: number,
    bottomBaseAt?: number,
    updatable?: boolean
} & IMeshInitial<T>;
export type IBoxProps = IBoxInitial<BabylonMesh>;

export const BoxHOC = (EL: Nullable<React.FC<IBoxProps>>) => {
    return (props: IBoxProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateBox(name, props, scene); 
                console.log(`Box ${name} created`);
            }
        }, [])

        return EL && <EL {...props}/>
    };
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(BoxHOC(e));
}

export const P2PBox = extendsFrom<IBoxProps>(null);