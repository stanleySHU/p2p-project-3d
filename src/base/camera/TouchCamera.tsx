import { TouchCamera as BabylonTouchCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type ITouchCameraProps = IComponentProps<BabylonTouchCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type ITouchCameraParams = {

}

function TouchCameraHOC(EL: React.FC) {
    return (props: ITouchCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TouchCameraHOC(e));
}

function _(props: ITouchCameraProps) {
    const { instance, name, position, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonTouchCamera(name, position, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTouchCamera = buildExtends<ITouchCameraProps & ITouchCameraParams>(_);