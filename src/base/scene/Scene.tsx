import { Scene as BabylonScene, SceneOptions, SceneLoader, Mesh, MeshBuilder, Vector4, Texture, StandardMaterial } from "@babylonjs/core";
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
    //     const mat = new StandardMaterial("", obj);
	// mat.diffuseTexture = new Texture("/assets/img/plazaBg.png", obj);

    // const f = new Vector4(0,0, 0.5, 1); // front image = half the whole image along the width 
	// const b = new Vector4(0.5,0, 1, 1); // back image = second half along the width
    
    // const plane = MeshBuilder.CreatePlane("plane", {frontUVs: f, backUVs: b, sideOrientation: Mesh.DOUBLESIDE});
    // plane.material = mat;
    
    // const ground = MeshBuilder.CreateGround("ground", {height: 1.5, width: 2.5, subdivisions: 4});
    // const mat = new StandardMaterial("", obj);
	// mat.diffuseTexture = new Texture("/assets/img/plazaBg.png", obj);
    // ground.material=mat;
    }, []);

    return <SceneContext.Provider value={{sceneInstance: instance!}}>
        <P2PChildren {...props}/>
    </SceneContext.Provider>;
}

export const P2PScene = getEL<ISceneParams>(_, [
    SceneHOC,
    ComponentHOC
])