import { IScenePropsInitial, P2PScene, SceneContext } from '../component/Scene'
import { AssetsManager } from '../component/resource/AssetsManager';

export const PreloadPage = (props: IScenePropsInitial) => {
    return <P2PScene {...props}>
        <AssetsManager>
            <loadImg taskName="main-bg" url="./assets/img/main_bg@1x.jpg"/>
        </AssetsManager>
    </P2PScene>
}