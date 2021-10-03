import { BaseTexture as BabylonBaseTexture} from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';
import { IThinTextureInitial, buildExtends as _buildExtends } from './ThinTexture';

export type IBaseTextureInitial<T> = IThinTextureInitial<T> & {}
export type IBaseTextureProps = IBaseTextureInitial<BabylonBaseTexture>;

function BaseTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IBaseTextureProps) => {
        const { engine } = useContext(EngineContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`BaseTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonBaseTexture(engine!);
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