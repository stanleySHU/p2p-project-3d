import { Scene as BabylonScene } from "@babylonjs/core";
import { useEffect, useReducer, ReactElement } from 'react';
import { IComponentProps, buildExtends as _buildExtends } from '../Component';
import { SceneHOC, SceneContext } from "./Scene";
import { reducer, initialState } from "../../page/PreloadRedux";
import { IAssetsManagerProps } from '../resource/AssetsManager';

export type IPreloadSceneProps<T> = IComponentProps<T> & {
    children: [ReactElement<IAssetsManagerProps>, ReactElement]
};


function PreloadScene<T>(props: T & IPreloadSceneProps<BabylonScene>) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { instance, componentInstances } = props;

    useEffect(() => {

    }, []);

    const children = props.children as [any, any];
    const AssetsManagerType = children[0].type;
    const AssetsManagerProps = children[0].props;
    const NodeType = children[1].type;
    const NodeProps = children[1].props;
    console.log(AssetsManagerProps, NodeProps);
    return <SceneContext.Consumer>
        {
            ({ sceneInstance }) => sceneInstance && <>
                <NodeType {...AssetsManagerProps} parentInstance={instance} parentComponentInstances={componentInstances} scene={sceneInstance} loadDispatch={state} />
                <AssetsManagerType {...NodeProps} parentInstance={instance} parentComponentInstances={componentInstances} scene={sceneInstance} loadState={dispatch} />
            </>
        }
    </SceneContext.Consumer>;
}

export const P2PPreloadScene = _buildExtends<IPreloadSceneProps<BabylonScene>>(SceneHOC(PreloadScene));