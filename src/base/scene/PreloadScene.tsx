import { Scene } from "@babylonjs/core";
import React, { ReactElement, useContext, useEffect, useReducer } from "react";
import { P2PAssetsManager, P2PScene } from "..";
import { Nullable } from "../../utils/customType";
import { NavControllerContext } from "../tab/NavController";
import { push, replace } from "../tab/NavRedux";
import { initialState, InitialState, reducer } from "./PreloadRedux";
import { ISceneProps, SceneContext } from "./Scene";

export type IPreviewProps = {
    loadState?: InitialState,
    scene?: Nullable<Scene>
}

export type IPreloadSceneProps = ISceneProps & {
    next?: string,
    Preview?: ReactElement<IPreviewProps>
}

export function P2PPreloadPage(props: IPreloadSceneProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { navDispath } = useContext(NavControllerContext);

    function loaded() {
        if (props.next) {
            navDispath(replace(props.next));
        }
    }

    useEffect(() => {

    }, []);

    return <P2PScene {...props}>
        <SceneContext.Consumer>
            {
                ({ sceneInstance }) => sceneInstance &&
                    <>
                        {
                            React.cloneElement(props.Preview!, {
                                loadState: state,
                                scene: sceneInstance
                            })
                        }
                        <P2PAssetsManager scene={sceneInstance} loadDispatch={dispatch} loaded={loaded}>
                            {props.children}
                        </P2PAssetsManager>
                    </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}