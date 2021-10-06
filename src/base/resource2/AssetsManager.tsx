import React, { useEffect, useRef } from "react";
import { AbstractAssetTask, AssetsManager as BabylonAssetsManager, Scene as BabylonScene} from '@babylonjs/core';
import { ImageResource } from "./ImageResource";
import { Resource } from "./Resource";
import { Nullable, UndefinedAble } from "../../utils/customType";
import { Action, processUpdate, loadFinish, load } from "../../page/PreloadRedux";
import { IComponentProps } from '../Component'

export type IAssetsManagerInitial<T> = IComponentProps<T> & {
    scene: BabylonScene,
    children: any | any[], 
    loadDispatch: React.Dispatch<Action>
}
export type IAssetsManagerProps = IAssetsManagerInitial<BabylonAssetsManager>;

export const P2PAssetsManager = (props: IAssetsManagerProps) => {
    const { scene, loadDispatch } = props;
    const assetContainerRef = useRef(new BabylonAssetsManager(scene));

    useEffect(() => {
        console.log(props)
        React.Children.forEach(props.children, (child: any) => {
            let type = child.type as string;
            let resource = resolve(type);
            resource?.addTask(assetContainerRef.current, child.props);
        });
        assetContainerRef.current.onProgress = handleProgress;
        assetContainerRef.current.onTaskError = handleTaskError;
        assetContainerRef.current.onTaskSuccess = handleTaskSuccess;
        assetContainerRef.current.onFinish = handleFinish;
        assetContainerRef.current.load();
        loadDispatch!(load());
    }, []);

    function handleProgress(remainingCount: number, totalCount: number, task: AbstractAssetTask) {
        loadDispatch!(processUpdate(1- (remainingCount / totalCount)));
        console.log('process', remainingCount, totalCount, task);
    }

    function handleTaskError(task: AbstractAssetTask) {
        console.log('error', task);
    }

    function handleTaskSuccess(task: AbstractAssetTask) {
        console.log('success', task);
    }

    function handleFinish(tasks: AbstractAssetTask[]) {
        loadDispatch!(loadFinish());
        console.log('finish', tasks);
    }

    function resolve(type: string): UndefinedAble<Resource> {
        switch(type) {
            case "taskMesh": {
                break;
            }
            case "taskTextFile": {
                break;
            }
            case "taskBinaryFile": {
                break;
            }
            case "taskImg": {
                return new ImageResource();
            }
            case "taskTexture": {
                break;
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