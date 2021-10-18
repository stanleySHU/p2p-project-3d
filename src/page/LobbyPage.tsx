import { Vector3,SpriteManager } from "@babylonjs/core";
import { P2PFreeCamera, P2PGround, P2PDirectionalLight, P2PStandardMaterial, P2PCubeTexture, P2PBox} from "../base";
import { ISceneProps, SceneContext, P2PScene } from "../base/scene/Scene";

export const LobbyPage = (props: ISceneProps) => {
    return <P2PScene {...props}>
        <SceneContext.Consumer >
            {
                ({ sceneInstance }) => <>
                    <P2PFreeCamera name="camera" scene={sceneInstance} position={new Vector3(0, 5, 0)} setTarget={Vector3.Zero()} >
                    </P2PFreeCamera>
                    <P2PDirectionalLight name="light" scene={sceneInstance} direction={new Vector3(0, -1, 0)}/>
                </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}