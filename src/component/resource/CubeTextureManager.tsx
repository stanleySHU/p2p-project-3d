import { AbstractAssetTask, AssetsManager, CubeTextureAssetTask, ImageAssetTask, TextureAssetTask } from "@babylonjs/core";
import { IResourceInitial, Resource } from "./Resource";

export type ICubeTextureResourceInitial = {
    extensions?: string[],
    noMipmap?: boolean,
    files: string[]
} & IResourceInitial

export class ImageResource extends Resource {
    getTask(loader: AssetsManager, props: ICubeTextureResourceInitial): CubeTextureAssetTask {
        return loader.addCubeTextureTask(props.taskName, props.url);
    }

    onSuccess(task: CubeTextureAssetTask) {
        super.onSuccess(task);
    }

    onError(task: CubeTextureAssetTask, message?: string, exception?: any) {
        super.onError(task, message, exception);
    }
}