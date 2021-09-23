import { P2PScene } from '../component/Scene'
import { IPageOptions } from './BasePage'
import {P2PArcRotateCamera } from '../component/ArcRotateCamera';
import { Vector3 } from '@babylonjs/core';

export const PreloadPage = (props: IPageOptions) => {
    return <P2PScene id={props.id}>
        <P2PArcRotateCamera name="camera" alpha={1} beta={0} radius={10} target={new Vector3(0, 0, 0)}>
                
        </P2PArcRotateCamera>
    </P2PScene>
}