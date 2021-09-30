import { Vector3 } from '@babylonjs/core';
import { P2PDirectionalLight, P2PFreeCamera, P2PNode, P2PStandardMaterial, P2PTransformNode } from '../component';
import { P2PGround } from '../component/mesh/Ground';
import { IScenePropsInitial, P2PScene } from '../component/Scene'


export const StartPage = (props: IScenePropsInitial) => {
    return <P2PScene {...props}>
        <P2PNode name="view">
            <P2PFreeCamera name="camera" position={new Vector3(0, 5, -10)} />
            <P2PDirectionalLight name="light" direction={Vector3.Zero()} />
            <P2PGround name="bg" width={6} height={6} >
                <P2PStandardMaterial name="material"/>
            </P2PGround>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
            <P2PTransformNode name="111"/>
        </P2PNode>
    </P2PScene>
}