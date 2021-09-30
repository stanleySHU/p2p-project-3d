import { Material as BabylonMaterial } from '@babylonjs/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';

export type IMaterialInitial<T> = {
    name: string,
    doNotAdd?: boolean,
    instanceRef?: React.MutableRefObject<T>,
};
export type IMaterialProps = IMaterialInitial<BabylonMaterial> & IMaterialOptions;

function MaterialHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IMaterialProps) => {
        const { scene } = useContext(SceneContext);
        const { name, doNotAdd } = props;

        const instanceRef = useRef<any>();

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonMaterial(name, scene!, doNotAdd);
                console.log(`Material ${name} created`);
            }
        }, []);
        
        return EL && <EL {...props} instanceRef={instanceRef}/>
    };
} 

export function extendsFrom<T>(e: any) {
    return MaterialHOC<T>(e);
}

export const P2PMaterial = extendsFrom<IMaterialProps>(null);

export type IMaterialOptions = {

}