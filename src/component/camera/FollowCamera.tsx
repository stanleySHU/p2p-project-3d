import { AbstractMesh, FollowCamera as BabylonFollowCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ITargetCameraInitial, extendsFrom as _extendsFrom } from './TargetCamera';

export type IFollowCameraInitial<T> = ITargetCameraInitial<T> & {
    lockedTarget?: Nullable<AbstractMesh>
};
export type IFollowCameraProps = IFollowCameraInitial<BabylonFollowCamera> & IFollowCameraOptions;

function FollowCameraHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & IFollowCameraProps) => {
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