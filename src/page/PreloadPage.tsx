import { IScenePropsInitial, P2PScene, SceneContext } from '../component/Scene'
import {P2PArcRotateCamera } from '../component/camera/ArcRotateCamera';
import { Vector3 } from '@babylonjs/core';
import { AssetsManager } from '../resource/AssetsManager';
import { P2PGround } from '../component/mesh/Ground';
import { FreeCamera } from '../component/camera/FreeCamera';
import { P2PDirectionalLight } from '../component/lights/DirectionalLight';

export const PreloadPage = (props: IScenePropsInitial) => {
    return <P2PScene {...props}>
        <AssetsManager>
            <loadImg taskName="main-bg" url="./assets/img/main_bg@1x.jpg"/>
        </AssetsManager>
        <SceneContext.Consumer>
            <FreeCamera name="camera" position={new Vector3(0, 5, -10)}>
                <P2PDirectionalLight name="light" direction={new Vector3(0, 1, 0)}/>
                <P2PGround name="bg" width={100} height={100}/>
            </FreeCamera>
        </SceneContext.Consumer>
        {/* <P2PArcRotateCamera name="camera" alpha={1} beta={0} radius={10} target={new Vector3(0, 0, 0)}>
            <P2PGround name="bg" width={100} height={100}/>
        </P2PArcRotateCamera> */}
    </P2PScene>
}