import { Vector3 } from '@babylonjs/core';
import { P2PArcRotateCamera } from '../component/camera/ArcRotateCamera';
import { FreeCamera } from '../component/camera/FreeCamera';
import { P2PGround } from '../component/mesh/Ground';
import { IScenePropsInitial, P2PScene } from '../component/Scene'


export const StartPage = (props: IScenePropsInitial) => {
    return <P2PScene {...props}>
            <FreeCamera name="camera" position={new Vector3(0, 5, -10)}>
                <P2PGround name="bg" width={100} height={100}/>
            </FreeCamera>
    </P2PScene>
}