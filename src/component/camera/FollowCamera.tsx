import { AbstractMesh, FollowCamera as BabylonFollowCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { ITargetCameraInitial, buildExtends as _buildExtends } from './TargetCamera';

export type IFollowCameraInitial<T> = ITargetCameraInitial<T> & {
    lockedTarget?: Nullable<AbstractMesh>
};
export type IFollowCameraProps = IFollowCameraInitial<BabylonFollowCamera> & IFollowCameraOptions;

function FollowCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IFollowCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, lockedTarget } = props;

        useEffect(() => {
            console.log(`FollowCamera ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonFollowCamera(name, position, scene!, lockedTarget);
                console.log(`FollowCamera ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FollowCameraHOC(e));
};

export const P2PFollowCamera = buildExtends<IFollowCameraProps>(ChildHOC(null));

export type IFollowCameraOptions = {
    
}