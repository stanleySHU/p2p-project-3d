import React, { ReactElement, ReactNode, useContext, useEffect, useState } from "react"
import { EngineContext } from "./Engine";
import { IScenePropsInitial } from './Scene';

type INavControllerOptions = {
    enter: string,
    children?: ReactElement<IScenePropsInitial> | ReactElement<IScenePropsInitial>[]
}

export const NavController = (props: INavControllerOptions) => {
    const { engine } = useContext(EngineContext);
    const [scenes, setScenes] = useState<ReactElement<IScenePropsInitial>[]>([]);

    function push(id: string) {
        const children = Array.isArray(props.children) ? props.children : [props.children];
        const preloadScene = children.filter(e => {
            return e?.props.id == id;
        })[0];
        if (preloadScene) {
            setScenes([preloadScene]);
        }
    }

    function pop() {

    }

    useEffect(() => {
        const enterId = props.enter || 'preload';
        push(enterId);

        engine!.runRenderLoop(() => {
            engine!.scenes.forEach(e => {
                e.render();
            })
        });

        return () => {

        };
    }, []);

    return <>
        {scenes}
    </>
}