import { P2PScene } from '../component/Scene'
import { IPageOptions } from './BasePage'
import {P2PArcRotateCamera } from '../component/ArcRotateCamera';
import { Vector3 } from '@babylonjs/core';
import { AssetsManager } from '../resource/AssetsManager';

export const PreloadPage = (props: IPageOptions) => {
    return <P2PScene id={props.id} next="start">
        <AssetsManager>
            <loadImg taskName="main-bg" url="./assets/img/main_bg@1x.jpg"/>
        </AssetsManager>
        <P2PArcRotateCamera name="camera" alpha={1} beta={0} radius={10} target={new Vector3(0, 0, 0)}>
                
        </P2PArcRotateCamera>
    </P2PScene>
}