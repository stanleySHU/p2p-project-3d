import { ColorGradingTexture as BabylonColorGradingTexture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';
import { IBaseTextureInitial, buildExtends as _buildExtends } from './BaseTexture';

export type IColorGradingTextureInitial<T> = IBaseTextureInitial<T> & {
    url: string,
    onLoad?: Nullable<() => void>
}
export type IColorGradingTextureProps = IColorGradingTextureInitial<BabylonColorGradingTexture>;

function ColorGradingTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IColorGradingTextureProps) => {
        const { engine } = useContext(EngineContext);
        const { instance, name, url, onLoad } = props;

        useEffect(() => {
            console.log(`ColorGradingTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonColorGradingTexture(url, engine!, onLoad);
                console.log(`ColorGradingTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ColorGradingTextureHOC(e));
}

export const P2PColorGradingTexture = buildExtends<IColorGradingTextureProps>(ChildHOC(null));
    
export type IColorGradingTextureOptions = {};