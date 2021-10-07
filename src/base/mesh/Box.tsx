import { Color4, Mesh as BabylonMesh, MeshBuilder, Vector4 } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IMeshInitial, buildExtends as _buildExtends } from './Mesh';

export type IBoxInitial<T> = IMeshInitial<T> & {
    name: string,
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
};
export type IBoxProps = IBoxInitial<BabylonMesh>;

function BoxHOC<T>(EL: React.FC<T>) {
    return (props: T & IBoxProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateBox(name, props, scene); 
            }
        }, [])

        return <EL {...props}/>
    };
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BoxHOC(e));
}

export const P2PBox = buildExtends<IBoxProps>(ChildHOC(null));