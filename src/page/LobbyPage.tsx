import { Color3, Scene, Vector2, Vector3 } from "@babylonjs/core";
import { P2PDirectionalLight, P2PStandardMaterial, P2PTargetCamera, P2PTransformNode, P2PTexture, P2PMesh, P2PAdvancedDynamicTexture } from "../base";
import { ISceneProps, SceneContext, P2PScene } from "../base/scene/Scene";
import { FullBackgroundVertexData } from "../components/FullBackground";

export const LobbyPage = (props: ISceneProps) => {
    return <P2PScene {...props}>
        <SceneContext.Consumer >
            {
                ({ sceneInstance }) => <>
                    {getMaterial(sceneInstance)}
                    <P2PTargetCamera name="camera" position={new Vector3(0, 10, -5.774)} setTarget={new Vector3(0, 0, 0)} scene={sceneInstance}/>
                    <P2PDirectionalLight name="light" scene={sceneInstance} direction={new Vector3(0, -1, 0)} />
                    <P2PMesh name="customBg" scene={sceneInstance} >
                        {FullBackgroundVertexData()}
                    </P2PMesh>
                    <P2PTransformNode>
                        <P2PTransformNode name="free">
                            <P2PMesh name="freeRoom" scene={sceneInstance} />
                        </P2PTransformNode>
                        <P2PTransformNode name="fresher">
                            <P2PMesh name="fresherRoom" scene={sceneInstance} />
                        </P2PTransformNode>
                        <P2PTransformNode name="advanted">
                            <P2PMesh name="advantedRoom" scene={sceneInstance} />
                        </P2PTransformNode>
                        <P2PTransformNode name="master">
                            <P2PMesh name="masterRoom" scene={sceneInstance} />
                        </P2PTransformNode>
                    </P2PTransformNode>
                    {/* <P2PAdvancedDynamicTexture>
                    </P2PAdvancedDynamicTexture> */}
                </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}


function getMaterial(scene: Scene) {
    return <>
        <P2PStandardMaterial name="" scene={scene} assignToMeshByName={['customBg']}>
            <P2PTexture url="/assets/img/lobby.png" sceneOrEngine={scene} />
        </P2PStandardMaterial>
    </>;
}
