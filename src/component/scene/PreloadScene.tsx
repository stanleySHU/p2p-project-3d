import { AbstractAssetTask, Scene as BabylonScene } from "@babylonjs/core";
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../Component';
import { SceneHOC } from "./Scene";

export type IPreloadSceneProps<T> = IComponentProps<T> & {};

function PreloadSceneHOC<T>(EL: React.FC<T>) {
    return (props: T & IPreloadSceneProps<BabylonScene>) => {
        const { instance } = props;

        function onProgress(remainingCount: number, totalCount: number, task: AbstractAssetTask) {

        }

        function onFinish(tasks: AbstractAssetTask[]) {

        }

        useEffect(() => {
            
        }, []);

        return <EL {...props} onProgress={onProgress} onFinish={onFinish}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PreloadSceneHOC(e));
}

export const P2PPreloadScene = buildExtends(SceneHOC(ChildHOC(null)));