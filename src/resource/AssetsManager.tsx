import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { AbstractAssetTask, AssetsManager as BabylonAssetsManager, ImageAssetTask} from '@babylonjs/core';
import { SceneContext } from "../component/Scene";
import { ImageResource } from "./ImageResource";
import { IResourceInitial, Resource } from "./Resource";
import { Nullable, UndefinedAble } from "../utils/customType";

export type IAssetsManagerInitial = {
    children: any | any[], //ReactElement<IResourceInitial> | ReactElement<IResourceInitial>[],
    onProgress?: (remainingCount: number, totalCount: number, task: AbstractAssetTask) => void,
    onFinish?: (tasks: AbstractAssetTask[]) => void;
}

export const AssetsManager = (props: IAssetsManagerInitial) => {
    const { scene, onProgress, onFinish } = useContext(SceneContext);
    const assetContainerRef = useRef(new BabylonAssetsManager(scene!));

    useEffect(() => {
        const children: ReactElement<IResourceInitial>[] = Array.isArray(props.children) ? props.children : [props.children];
        children.forEach(child => {
            let type = child.type as string;
            let resource = resolve(type);
            resource?.addTask(assetContainerRef.current, child.props);
        });
        assetContainerRef.current.onProgress = handleProgress;
        assetContainerRef.current.onFinish = handleFinish;
        assetContainerRef.current.load();
    }, []);

    function handleProgress(remainingCount: number, totalCount: number, task: AbstractAssetTask) {
        onProgress && onProgress(remainingCount, totalCount, task);
    }

    function handleFinish(tasks: AbstractAssetTask[]) {
        onFinish && onFinish(tasks);
    }

    function resolve(type: string): UndefinedAble<Resource> {
        switch(type) {
            case "loadMesh": {
                break;
            }
            case "loadTextFile": {
                break;
            }
            case "loadBinaryFile": {
                break;
            }
            case "loadImg": {
                return new ImageResource();
            }
            case "loadTexture": {
                break;
            }
            case "loadCubeTexture": {
                break;
            }
            case "loadHDRCubeTexture": {
                break;
            }
            case "loadEquiRectangularCubeTexture": {
                break;
            }
            default: break;
        }
    }
    return null;
};