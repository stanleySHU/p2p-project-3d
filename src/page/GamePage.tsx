import { Vector3 } from "@babylonjs/core";
import { P2PFreeCamera, P2PGround, P2PDirectionalLight, P2PBox, P2PStandardMaterial, P2PCubeTexture, P2PArcRotateCamera} from "../base";
import { ISceneProps, SceneContext, P2PScene } from "../base/scene/Scene";

export const GamePage = (props: ISceneProps) => {
    return <P2PScene {...props}>
        <SceneContext.Consumer >
            {
                ({ sceneInstance }) => <>
                    {/* <P2PFreeCamera name="camera" scene={sceneInstance} position={new Vector3(0, 5, 0)} attachControl={[sceneInstance, true]} setTarget={Vector3.Zero()} /> */}
                    <P2PArcRotateCamera name="camera" alpha={-Math.PI / 2} beta={Math.PI / 2} radius={5} target={Vector3.Zero()} scene={sceneInstance} attachControl={[sceneInstance, true]}/>
                    <P2PDirectionalLight name="light" scene={sceneInstance} direction={new Vector3(0, -1, 0)}/>
                    <P2PBox name="skybox" scene={sceneInstance} options={{size: 10000}}>
                        <P2PStandardMaterial name="skybox" scene={sceneInstance}>
                            <P2PCubeTexture rootUrl="/assets/skybox/underwater" sceneOrEngine={sceneInstance}/>
                        </P2PStandardMaterial>
                    </P2PBox>
                </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}