import { AbstractAssetTask, Scene as BabylonScene, SceneOptions } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IComponentProps, buildExtends as _buildExtends, ChildHOC} from '../Component';
import { EngineContext } from "../Engine";

export type ISceneInitial<T> = IComponentProps<T> & {
    id: string,
    next?: string,
    options?: SceneOptions
} & {
    onProgress?: (remainingCount: number, totalCount: number, task: AbstractAssetTask) => void,
    onFinish?: (tasks: AbstractAssetTask[]) => void
};
export type ISceneProps = ISceneInitial<BabylonScene>;

type ISceneContextOptions = {
    scene?: BabylonScene
}
export const SceneContext = React.createContext<ISceneContextOptions>({});

export function SceneHOC<T>(EL: React.FC<T>) {
    return (props: T & ISceneProps) => {
        const { engine } = useContext(EngineContext);
        const { name, instance, options } = props;
        useEffect(() => {
            console.log(`Scene ${name} called`);
            if (instance && !instance.current) {
                instance!.current = new BabylonScene(engine!, options);
                console.log(`Scene ${name} created`);
            }
            return () => {
                instance!.current.dispose();
            }
        }, []);
        return <SceneContext.Provider value={{scene: instance!.current}}>
                <EL {...props}/>
            </SceneContext.Provider>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SceneHOC(e));
}

export const P2PScene = buildExtends(ChildHOC(null));