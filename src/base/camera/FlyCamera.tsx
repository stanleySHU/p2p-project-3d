import { AbstractMesh, FlyCamera as BabylonFlyCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';
import { TargetCameraHOC } from './TargetCamera';

export type IFlyCameraProps = IComponentProps &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type IFlyCameraParams = {

}

function FlyCameraHOC(EL: React.FC) {
    return (props: IFlyCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

function _(props: IFlyCameraProps) {
    const { init, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonFlyCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}


export const P2PFlyCamera = getEL<IFlyCameraParams>(_, [
    FlyCameraHOC,
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);