import { BaseTexture as BabylonBaseTexture, Scene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { IThinTextureInitial, buildExtends as _buildExtends } from './ThinTexture';

export type IBaseTextureInitial<T> = IThinTextureInitial<T> & {
    sceneOrEngine: Nullable<Scene | ThinEngine>
}
export type IBaseTextureProps = IBaseTextureInitial<BabylonBaseTexture>;

function BaseTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IBaseTextureProps) => {
        const { instanceRef, name, sceneOrEngine } = props;

        useEffect(() => {
            console.log(`BaseTexture ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonBaseTexture(sceneOrEngine);
                console.log(`BaseTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BaseTextureHOC(e));
}

export const P2PBaseTexture = buildExtends<IBaseTextureProps>(ChildHOC(null));
    
export type IBaseTextureOptions = {};