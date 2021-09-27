import { Scene as BabylonScene, Scene } from "@babylonjs/core";
import React, { ReactElement, ReactNode, useContext, useEffect, useRef, useState } from "react"
import { EngineContext } from "./Engine";
import { IScenePropsInitial } from './Scene';

type INavControllerOptions = {
    enter: string,
    children?: ReactElement<IScenePropsInitial> | ReactElement<IScenePropsInitial>[]
}

type INavControllerContextOptions = {
    push?: (id: string) => void,
    pop?: () => void,
    replace?: (id: string) => void,
    sceneLoaded?: (scene: BabylonScene) => void,
    sceneDispose?: (scene: BabylonScene) => void
}

export const NavControllerContext = React.createContext<INavControllerContextOptions>({});

export const NavController = (props: INavControllerOptions) => {
    const { engine } = useContext(EngineContext);
    const [sceneEls, setSceneEls] = useState<ReactElement<IScenePropsInitial>[]>([]);
    const scenesRef = useRef<BabylonScene[]>([]);

    function push(id: string) {
        const children = Array.isArray(props.children) ? props.children : [props.children];
        const preloadScene = children.filter(e => {
            return e?.props.id == id;
        })[0];
        if (preloadScene) {
            setSceneEls([preloadScene]);
        }
    }

    function pop() {

    }

    function replace(id: string) {

    }

    function sceneLoaded(scene: BabylonScene) {
        scenesRef.current.push(scene);
    }

    function sceneDispose(scene: BabylonScene) {
        scenesRef.current = scenesRef.current.filter(e => {
            return e != scene;
        })
    }

    useEffect(() => {
        const enterId = props.enter || 'preload';
        push(enterId);

        engine!.runRenderLoop(() => {
            scenesRef.current.forEach(e => {
                e.render();
            })
        });

        return () => {

        };
    }, []);

    return <NavControllerContext.Provider value={{push: push, pop: pop, replace: replace, sceneLoaded: sceneLoaded, sceneDispose: sceneDispose}}>
        {sceneEls}
    </NavControllerContext.Provider>
}