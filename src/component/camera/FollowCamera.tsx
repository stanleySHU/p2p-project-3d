import { AbstractMesh, FollowCamera as BabylonFollowCamera } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { SceneContext } from '../Scene';
import { ITargetCameraInitial } from './TargetCamera';

export type IFollowCameraInitial<T> = {
    lockedTarget?: Nullable<AbstractMesh>
} & ITargetCameraInitial<T>;
export type IFollowCameraProps = IFollowCameraInitial<BabylonFollowCamera>;

export const FollowCameraHOC = (EL: Nullable<React.FC<IFollowCameraProps>>) => {
    return (props: IFollowCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, lockedTarget } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonFollowCamera(name, position, scene!, lockedTarget);
                console.log('FollowCamera created');
            }
        }, []);

        return EL &&  <EL {...props}/>
    }
};