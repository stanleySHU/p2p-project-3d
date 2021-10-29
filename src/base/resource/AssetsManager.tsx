import React, { useContext, useEffect, useRef } from "react";
import { AbstractAssetTask, AssetsManager as BabylonAssetsManager, Scene as BabylonScene} from '@babylonjs/core';
import { ImageResource } from "./ImageResource";
import { TextureResource } from "./TextureResource";
import { TextFileResource } from './TextFileResource';
import { Resource } from "./Resource";
import { Nullable, UndefinedAble } from "../../utils/customType";
import { Action, processUpdate, loadFinish, load } from "../scene/PreloadRedux";
import { IComponentProps } from '../Component'
import { MeshResource } from "./MeshResource";
import { EngineContext } from "../Engine";

export type IAssetsManagerInitial= IComponentProps & {
    scene: BabylonScene,
    children: any | any[], 
    loadDispatch: React.Dispatch<Action>,
    loaded: () => void
}

export const P2PAssetsManager = (props: IAssetsManagerInitial) => {
    const { scene, loadDispatch, loaded } = props;
    const assetContainerRef = useRef<BabylonAssetsManager>();

    useEffect(() => {
        assetContainerRef.current = new BabylonAssetsManager(scene);
        React.Children.forEach(props.children, (child: any) => {
            let type = child.type as string;
            let resource = resolve(type);
            resource?.addTask(assetContainerRef.current!, child.props);
        });
        assetContainerRef.current.onProgress = handleProgress;
        assetContainerRef.current.onTaskError = handleTaskError;
        assetContainerRef.current.onTaskSuccess = handleTaskSuccess;
        assetContainerRef.current.onFinish = handleFinish;
        assetContainerRef.current.load();
        loadDispatch!(load());
        return () => {
            assetContainerRef.current = undefined;
        }
    }, []);

    function handleProgress(remainingCount: number, totalCount: number, task: AbstractAssetTask) {
        console.log('process', `${(totalCount - remainingCount) / totalCount * 100}%`);
        loadDispatch!(processUpdate((totalCount - remainingCount) / totalCount));
    }

    function handleTaskError(task: AbstractAssetTask) {
    }

    function handleTaskSuccess(task: AbstractAssetTask) {
    }

    function handleFinish(tasks: AbstractAssetTask[]) {
        console.log('finish', tasks);
        loadDispatch!(loadFinish());
        loaded();
    }

    function resolve(type: string): UndefinedAble<Resource> {
        switch(type) {
            case "taskMesh": {
                return new MeshResource();
            }
            case "taskTextFile": {
                return new TextFileResource();
            }
            case "taskBinaryFile": {
                break;
            }
            case "taskImg": {
                return new ImageResource();
            }
            case "taskTexture": {
                return new TextureResource();
            }
            case "taskCubeTexture": {
                break;
            }
            case "taskHDRCubeTexture": {
                break;
            }
            case "taskEquiRectangularCubeTexture": {
                break;
            }
            default: break;
        }
    }
    return null;
};