import { Vector3 } from '@babylonjs/core';
import { P2PDirectionalLight, P2PFreeCamera, P2PNode, P2PStandardMaterial, P2PTexture } from '../base';
import { P2PGround } from '../base/mesh/Ground';
import { ISceneProps, P2PScene, SceneContext } from '../base/scene/Scene'


export const StartUpPage = (props: ISceneProps) => {
    return <P2PScene {...props}>
        <SceneContext.Consumer >
            {
                ({ sceneInstance }) => sceneInstance && 
                <P2PNode name="view" scene={sceneInstance}>
                    <P2PFreeCamera name="camera" scene={sceneInstance} position={new Vector3(0, 5, -10)} />
                    <P2PDirectionalLight name="light" scene={sceneInstance} direction={Vector3.Zero()} />
                    <P2PGround name="bg" scene={sceneInstance} width={9.6} height={5.4} >
                        <P2PStandardMaterial name="material" scene={sceneInstance} assignTo="material">
                            <P2PTexture assignTo="diffuseTexture" name="" url="" />
                        </P2PStandardMaterial>
                    </P2PGround>
                </P2PNode>
            }
        </SceneContext.Consumer>
    </P2PScene>
}