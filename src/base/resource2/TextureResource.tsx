import { AbstractAssetTask, AssetsManager, ImageAssetTask, TextureAssetTask } from "@babylonjs/core";
import { IResourceInitial, Resource } from "./Resource";

export type ITextureResourceInitial = IResourceInitial & {
    noMipmap?: boolean,
    invertY?: boolean,
    samplingMode?: number
};

export class ImageResource extends Resource {
    getTask(loader: AssetsManager, props: ITextureResourceInitial): TextureAssetTask {
        return loader.addTextureTask(props.taskName, props.url);
    }

    onSuccess(task: TextureAssetTask) {
        super.onSuccess(task);
    }

    onError(task: TextureAssetTask, message?: string, exception?: any) {
        super.onError(task, message, exception);
    }
}