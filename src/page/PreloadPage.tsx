import { P2PAssetsManager, P2PNode } from '../base'
import { ISceneProps, P2PScene, SceneContext } from '../base/scene/Scene'
import { useEffect, useReducer } from 'react';
import { reducer, initialState } from "./PreloadRedux";

export const PreloadPage = (props: ISceneProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

    }, []);

    return <P2PScene {...props}>
        <SceneContext.Consumer>
            {
                ({ sceneInstance }) => sceneInstance &&
                    <>
                        <P2PNode name="" scene={sceneInstance} >
                            
                        </P2PNode>
                        <P2PAssetsManager scene={sceneInstance} loadDispatch={dispatch}>
                            <taskImg taskName="main-bg" url="/assets/img/main_bg@1x.jpg" />
                            <taskImg taskName="main-bg" url="/assets/img/main_bg@1x.jpg" />
                        </P2PAssetsManager>
                    </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}