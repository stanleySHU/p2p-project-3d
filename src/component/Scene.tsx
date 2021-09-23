import { Scene as BaybylonjsScene, Scene } from "@babylonjs/core";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { EngineContext } from "./Engine";


export type IScenePropsInitial = {
    id: string,
    next?: string,
    children?: ReactNode
}

export type ISceneStateOptions = {
    loaded: boolean,
    scene?: BaybylonjsScene
}

export type ISceneContextOptions = {
    scene?: BaybylonjsScene
}

export const SceneContext = React.createContext<ISceneContextOptions>({
    scene: undefined
});

export const P2PScene = (props: IScenePropsInitial) => {
    const { engine } = useContext(EngineContext);
    const [instance, setInstance] = useState<BaybylonjsScene>();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let scene = new BaybylonjsScene(engine!);
        setInstance(scene);
        return () => {
            scene.dispose();
        };
    }, []);

    return <SceneContext.Provider value={{scene: instance}}>
        {
            instance !== undefined && props.children
        }
    </SceneContext.Provider>
}