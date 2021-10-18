import { Scene as BabylonScene, SceneOptions, SceneLoader, Mesh } from "@babylonjs/core";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { ComponentHOC, getEL, IComponentProps, P2PChildren} from '../Component';
import { EngineContext } from "../Engine";

export type ISceneProps= IComponentProps & {
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

function _(props: ISceneProps) {
    const { engine } = useContext(EngineContext);
    const { instance, init, options, id } = props;
    useLayoutEffect(() => {
        let obj = new BabylonScene(engine!, options);
        init!(obj);  
        if (id == 'game') SceneLoader.ImportMeshAsync(null, '/assets/gltf/', 'hetun.gltf', obj, (event) => {
            
        }).then((e) => {
            console.log(11, e)
            let t = new Mesh('', null, null, e.meshes[1] as Mesh);
        })
    }, []);

    return <SceneContext.Provider value={{sceneInstance: instance!}}>
        <P2PChildren {...props}/>
    </SceneContext.Provider>;
}

export const P2PScene = getEL<ISceneParams>(_, [
    SceneHOC,
    ComponentHOC
])