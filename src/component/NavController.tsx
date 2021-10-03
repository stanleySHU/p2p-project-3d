import { Scene as BabylonScene, Scene } from "@babylonjs/core";
import React, { ReactElement, ReactNode, useContext, useEffect, useRef, useState } from "react"
import { EngineContext } from "./Engine";
import { ISceneProps } from './scene/Scene';

type INavControllerOptions = {
    enter: string,
    children: ReactElement<ISceneProps> | ReactElement<ISceneProps>[]
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
    const [sceneEls, setSceneEls] = useState<ReactElement<ISceneProps>[]>([]);
    const sceneIdsRef = useRef<string[]>([]);
    const scenesRef = useRef<BabylonScene[]>([]);

    function update() {
        const children = Array.isArray(props.children) ? props.children : [props.children];
        const scenes =  children.filter(e => {
            return sceneIdsRef.current.indexOf(e?.props.id!) >= 0;
        });
        setSceneEls(scenes);
    }
    
    function push(id: string) {
        sceneIdsRef.current.push(id);
        update();
    }

    function pop() {
        sceneIdsRef.current.pop();
        update();
    }

    function replace(id: string, depth: number = 1) {
        for (let i = 0; i < depth; i++) {
            sceneIdsRef.current.pop();
        }
        sceneIdsRef.current.push(id);
        update();
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
                e.cameras.length !=0 && e.render();
            })
        });

        return () => {

        };
    }, []);

    return <NavControllerContext.Provider value={{push: push, pop: pop, replace: replace, sceneLoaded: sceneLoaded, sceneDispose: sceneDispose}}>
        {sceneEls}
    </NavControllerContext.Provider>
}