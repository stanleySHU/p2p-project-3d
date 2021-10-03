import { Vector3 } from '@babylonjs/core';
import { P2PDirectionalLight, P2PFreeCamera, P2PNode, P2PStandardMaterial, P2PTexture } from '../component';
import { P2PGround } from '../component/mesh/Ground';
import { ISceneProps, P2PScene } from '../component/scene/Scene'


export const StartPage = (props: ISceneProps) => {
    return <P2PScene {...props}>
        <P2PNode name="view">
            <P2PFreeCamera name="camera" position={new Vector3(0, 5, -10)} />
            <P2PDirectionalLight name="light" direction={Vector3.Zero()} />
            <P2PGround name="bg" width={9.6} height={5.4} >
                <P2PStandardMaterial name="material" assignTo="material">
                    <P2PTexture assignTo="diffuseTexture"  name="" url=""/>
                </P2PStandardMaterial>
            </P2PGround>
        </P2PNode>
    </P2PScene>
}