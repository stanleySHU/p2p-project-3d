import { AbstractMesh, FollowCamera as BabylonFollowCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ITargetCameraInitial, extendsFrom as _extendsFrom } from './TargetCamera';

export type IFollowCameraInitial<T> = {
    lockedTarget?: Nullable<AbstractMesh>
} & ITargetCameraInitial<T>;
export type IFollowCameraProps = IFollowCameraInitial<BabylonFollowCamera> & IFollowCameraOptions;

export const FollowCameraHOC = (EL: Nullable<React.FC<IFollowCameraProps>>) => {
    return (props: IFollowCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, lockedTarget } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonFollowCamera(name, position, scene!, lockedTarget);
                console.log(`FollowCamera ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(FollowCameraHOC(e));
};

export const P2PFollowCamera = extendsFrom<IFollowCameraProps>(null);

export type IFollowCameraOptions = {
    
}