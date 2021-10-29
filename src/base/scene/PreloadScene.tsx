import { Scene, Vector3 } from "@babylonjs/core";
import React, { ReactElement, useContext, useReducer } from "react";
import { P2PArcRotateCamera, P2PAssetsManager, P2PDirectionalLight, P2PFreeCamera, P2PNode, P2PScene } from "..";
import { Nullable } from "../../utils/customType";
import { NavControllerContext } from "../tab/NavController";
import { replace } from "../tab/NavRedux";
import { initialState, InitialState, reducer } from "./PreloadRedux";
import { ISceneProps, SceneContext } from "./Scene";

export type IPreviewProps = {
    loadState?: InitialState,
    scene?: Nullable<Scene>,
    process?: number,
    loading?: boolean
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

    return <P2PScene {...props}>
        <SceneContext.Consumer>
            {
                ({ sceneInstance }) =>
                    <>
                        <P2PNode name="preView" scene={sceneInstance}>
                        <P2PArcRotateCamera name="camera" alpha={-Math.PI / 2} beta={-Math.PI} radius={10} setTarget={Vector3.Zero()} scene={sceneInstance} attachControl={[sceneInstance, true]}/>
                        <P2PDirectionalLight name="light" scene={sceneInstance} direction={new Vector3(0, -1, 0)} />
                            {
                                React.cloneElement(props.Preview!, {
                                    loadState: state,
                                    scene: sceneInstance,
                                    process: state.process,
                                    loading: state.loading
                                })
                            }
                        </P2PNode>
                        <P2PAssetsManager scene={sceneInstance} loadDispatch={dispatch} loaded={loaded}>
                            {props.children}
                        </P2PAssetsManager>
                    </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}