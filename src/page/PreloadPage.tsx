import { IScenePropsInitial, P2PScene, SceneContext } from '../component/Scene'
import { Vector3 } from '@babylonjs/core';
import { AssetsManager } from '../component/resource/AssetsManager';
import { P2PDirectionalLight, P2PFreeCamera, P2PGround, P2PNode } from '../component';

export const PreloadPage = (props: IScenePropsInitial) => {
    return <P2PScene {...props}>
        <AssetsManager>
            <loadImg taskName="main-bg" url="./assets/img/main_bg@1x.jpg"/>
        </AssetsManager>
        <P2PNode name="view">
            <P2PFreeCamera name="camera" position={new Vector3(0, 5, -10)}/>
            <P2PDirectionalLight name="light" direction={Vector3.Zero()}/>
            <P2PGround name="bg" width={6} height={6}/>
        </P2PNode>
    </P2PScene>
}