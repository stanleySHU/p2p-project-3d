import { Material as BabylonMaterial } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { SceneContext } from '../Scene';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../Component'

export type IMaterialInitial<T> = IComponentProps<T> & {
    doNotAdd?: boolean
};
export type IMaterialProps = IMaterialInitial<BabylonMaterial> & IMaterialOptions;

function MaterialHOC<T>(EL: React.FC<T>) {
    return (props: T & IMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, doNotAdd } = props;

        useEffect(() => {
            console.log(`Material ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonMaterial(name, scene!, doNotAdd);
                console.log(`Material ${name} created`);
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