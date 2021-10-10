import { Scene as BabylonScene, SceneOptions } from "@babylonjs/core";
import React, { useContext, useEffect, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { IComponentProps, buildExtends as _buildExtends, P2PChildren} from '../Component';
import { EngineContext } from "../Engine";

export type ISceneProps= IComponentProps<BabylonScene> & {
    id: string,
    next?: string,
    options?: SceneOptions
};

export type ISceneParams = {
    ref?: any
}

type ISceneContextOptions = {
    sceneInstance: BabylonScene
}
export const SceneContext = React.createContext<ISceneContextOptions>({} as any);

function SceneHOC(EL: React.FC<ISceneParams>) {
    return React.forwardRef((props: ISceneParams, ref) => {
        return <EL {...props} ref={ref}/>;
    })
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SceneHOC(e));
}

const _ = React.forwardRef((props: ISceneProps, ref: any) => {
    const { engine } = useContext(EngineContext);
    const { instance, init, options } = props;

    useImperativeHandle(ref, () => {
        return new BabylonScene(engine!, options);
    }, []);

    return <SceneContext.Provider value={{sceneInstance: instance}}>
        <P2PChildren {...props}/>
    </SceneContext.Provider>;
})

export const P2PScene = buildExtends<ISceneProps & ISceneParams>(_);