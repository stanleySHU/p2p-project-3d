import { TargetCamera as BabylonTargetCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Camera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type ITargetCameraProps = IComponentProps<BabylonTargetCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ITargetCameraParams = {

}

function TargetCameraHOC(EL: React.FC) {
    return (props: ITargetCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TargetCameraHOC(e));
}

function _(props: ITargetCameraProps) {
    const { instance, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        instance!.current = new BabylonTargetCamera(name, position, scene, setActiveOnSceneIfNoneActive);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTargetCamera = buildExtends<ITargetCameraProps & ITargetCameraParams>(_);