import { Scene as BabylonScene, SceneOptions } from "@babylonjs/core";
import React, { useContext, useEffect, useState } from "react";
import { IComponentProps, buildExtends as _buildExtends, ChildHOC} from '../Component';
import { EngineContext } from "../Engine";

export type ISceneInitial<T> = IComponentProps<T> & {
    id: string,
    next?: string,
    options?: SceneOptions
};
export type ISceneProps = ISceneInitial<BabylonScene>;

type ISceneContextOptions = {
    sceneInstance: BabylonScene
}
export const SceneContext = React.createContext<ISceneContextOptions>({} as any);

export function SceneHOC<T>(EL: React.FC<T>) {
    return (props: T & ISceneProps) => {
        const { engine } = useContext(EngineContext);
        const { instance, options } = props;
        
        const [isReady, setIsReady] = useState(false);

        useEffect(() => {
            if (instance && !instance.current) {
                instance!.current = new BabylonScene(engine!, options);
                setIsReady(true);
            }
        }, []);
        return isReady && <SceneContext.Provider value={{sceneInstance: instance!.current}}>
                <EL {...props}/>
            </SceneContext.Provider>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SceneHOC(e));
}

export const P2PScene = buildExtends(ChildHOC(null));