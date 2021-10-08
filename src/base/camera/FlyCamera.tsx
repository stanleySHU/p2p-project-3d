import { AbstractMesh, FlyCamera as BabylonFlyCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type IFlyCameraProps = IComponentProps<BabylonFlyCamera> &{
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FlyCameraHOC(e));
}

function _(props: IFlyCameraProps) {
    const { instance, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        instance!.current = new BabylonFlyCamera(name, position, scene, setActiveOnSceneIfNoneActive);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFlyCamera = buildExtends<IFlyCameraProps & IFlyCameraParams>(_);