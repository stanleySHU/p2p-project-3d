import { Vector3 } from '@babylonjs/core'
import { P2PAssetsManager, P2PDirectionalLight, P2PFreeCamera, P2PGround, P2PImageAssetTask, P2PNode, P2PPreloadScene, P2PStandardMaterial, P2PTexture } from '../component'
import { ISceneProps } from '../component/scene/Scene'


export const PreloadPage = (props: ISceneProps) => {
    return <P2PPreloadScene {...props}>
        <P2PAssetsManager>
            <P2PImageAssetTask name="main-bg" url="./assets/img/main_bg@1x.jpg" />
        </P2PAssetsManager>
        {/* <P2PNode name="view">
            <P2PFreeCamera name="camera" position={new Vector3(0, 5, -10)} />
            <P2PDirectionalLight name="light" direction={Vector3.Zero()} />
            <P2PGround name="bg" width={9.6} height={5.4} >
                <P2PStandardMaterial name="material" assignTo="material">
                    <P2PTexture assignTo="diffuseTexture"  name="" url=""/>
                </P2PStandardMaterial>
            </P2PGround>
        </P2PNode> */}
    </P2PPreloadScene>
}