import { Color4, Mesh as BabylonMesh, MeshBuilder, Vector4 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
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
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`Box ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateBox(name, props, scene); 
                console.log(`Box ${name} created`);
            }
        }, [])

        return <EL {...props}/>
    };
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BoxHOC(e));
}

export const P2PBox = buildExtends<IBoxProps>(ChildHOC(null));