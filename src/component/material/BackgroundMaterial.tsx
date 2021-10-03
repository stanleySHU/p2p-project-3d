import { BackgroundMaterial as BabylonBackgroundMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IPushMaterialInitial, buildExtends as _buildExtends  } from './PushMaterial';

export type IBackgroundMaterialInitial<T> = IPushMaterialInitial<T> & {};
export type IBackgroundMaterialProps = IBackgroundMaterialInitial<BabylonBackgroundMaterial>;

function BackgroundMaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IBackgroundMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`BackgroundMaterial ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonBackgroundMaterial(name, scene!);
                console.log(`BackgroundMaterial ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BackgroundMaterialHOC(e));
}

export const P2PBackgroundMaterial = buildExtends<IBackgroundMaterialProps>(ChildHOC(null));