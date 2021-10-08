import { FreeCamera as BabylonFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TargetCamera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IFreeCameraProps = IComponentProps<BabylonFreeCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type IFreeCameraParams = {

}

function FreeCameraHOC(EL: React.FC) {
    return (props: IFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FreeCameraHOC(e));
}

function _(props: IFreeCameraProps) {
    const { instance, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        instance!.current = new BabylonFreeCamera(name, position, scene, setActiveOnSceneIfNoneActive);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFreeCamera = buildExtends<IFreeCameraProps & IFreeCameraParams>(_);