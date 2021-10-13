import { Scene as BabylonScene, SceneOptions } from "@babylonjs/core";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { IComponentProps, buildExtends as _buildExtends, P2PChildren} from '../Component';
import { EngineContext } from "../Engine";

export type ISceneProps= IComponentProps<BabylonScene> & {
    id: string,
    next?: string,
    options?: SceneOptions
};

export type ISceneParams = {}

type ISceneContextOptions = {
    sceneInstance: BabylonScene
}
export const SceneContext = React.createContext<ISceneContextOptions>({} as any);

function SceneHOC(EL: React.FC) {
    return (props: ISceneParams) => {
        useEffect(() => {
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SceneHOC(e));
}

function _(props: ISceneProps) {
    const { engine } = useContext(EngineContext);
    const { instance, init, options } = props;
    useLayoutEffect(() => {
        let obj = new BabylonScene(engine!, options);
        init!(obj)
    }, []);

    return <SceneContext.Provider value={{sceneInstance: instance!}}>
        <P2PChildren {...props}/>
    </SceneContext.Provider>;
}

export const P2PScene = buildExtends<ISceneProps & ISceneParams>(_);