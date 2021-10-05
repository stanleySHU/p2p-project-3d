import { Vector3 } from '@babylonjs/core'
import { P2PAssetsManager, P2PDirectionalLight, P2PFreeCamera, P2PGround, P2PImageAssetTask, P2PNode, P2PPreloadScene, P2PStandardMaterial, P2PTexture } from '../component'
import { ISceneProps, SceneContext } from '../component/scene/Scene'


export const PreloadPage = (props: ISceneProps) => {
    return <P2PPreloadScene {...props}>
        <P2PAssetsManager scene={null}>
            <P2PImageAssetTask name="main-bg" url="./assets/img/main_bg@1x.jpg" />
        </P2PAssetsManager>
        <P2PNode name="" scene={null as any}/>
    </P2PPreloadScene>
}