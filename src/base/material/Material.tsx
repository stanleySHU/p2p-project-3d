import { Material as BabylonMaterial, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../Component'

export type IMaterialInitial<T> = IComponentProps<T> & {
    scene: BabylonScene,
    name: string,
    doNotAdd?: boolean
};
export type IMaterialProps = IMaterialInitial<BabylonMaterial> & IMaterialOptions;

function MaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IMaterialProps) => {
        const { scene, instance, name, doNotAdd } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonMaterial(name, scene, doNotAdd);
            }
        }, []);

        return <EL {...props}/>
    };
} 

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MaterialHOC(e));
}

export const P2PMaterial = buildExtends<IMaterialProps>(ChildHOC(null));

export type IMaterialOptions = {}