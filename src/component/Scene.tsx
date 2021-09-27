import { Scene as BaybylonScene, Scene, AbstractAssetTask } from "@babylonjs/core";
import React, { Children, ReactElement, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { EngineContext } from "./Engine";
import { IAssetsManagerInitial } from '../resource/AssetsManager'
import { NavControllerContext } from "./NavController";

export type IScenePropsInitial = {
    id: string,
    next?: string,
    children: ReactElement | ReactElement[]
}

export type ISceneStateOptions = {
    loaded: boolean,
    scene?: BaybylonScene
}

type ISceneContextOptions = {
    scene?: BaybylonScene,
    onProgress?: (remainingCount: number, totalCount: number, task: AbstractAssetTask) => void,
    onFinish?: (tasks: AbstractAssetTask[]) => void
}
export const SceneContext = React.createContext<ISceneContextOptions>({});

export const P2PScene = (props: IScenePropsInitial) => {
    const { engine } = useContext(EngineContext);
    const { push, pop, sceneLoaded, sceneDispose } = useContext(NavControllerContext);

    const loadRef = useRef<ReactElement>();
    const viewRef = useRef<ReactElement[]>([]);
    const sceneRef = useRef<BaybylonScene>();
    
    const [instance, setInstance] = useState<BaybylonScene>();
    const [loaded, setLoaded] = useState<boolean>();

    function onProgress(remainingCount: number, totalCount: number, task: AbstractAssetTask) {

    }

    function onFinish(tasks: AbstractAssetTask[]) {
        setLoaded(true);
        if (props.next) {
            push!(props.next);
        } else {
            sceneLoaded!(sceneRef.current!);
        }
    }

    useEffect(() => {
        const children: ReactElement[] = Array.isArray(props.children) ? props.children : [props.children];
        let scene = new BaybylonScene(engine!);
        setInstance(scene);
        sceneRef.current = scene;

        for (let child of children) {
            if ((child.type as any).name == 'AssetsManager') {
                loadRef.current = child;
            } else {
                viewRef.current.push(child);
            }
        }

        return () => {
            scene.dispose();
        };
    }, []);

    return <SceneContext.Provider value={{scene: instance, onProgress: onProgress, onFinish: onFinish}}>
        {
            loaded ? viewRef.current : loadRef.current
        }
    </SceneContext.Provider>
}

