import { Camera as BabylonCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from '../node/Node';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type ICameraProps = IComponentProps<BabylonCamera> & {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ICameraParams = {

}

function CameraHOC(EL: React.FC) {
    return (props: ICameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CameraHOC(e));
}

function _(props: ICameraProps) {
    const { instance, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useEffect(() => {
        instance!.current = new BabylonCamera(name, position, scene, setActiveOnSceneIfNoneActive);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCamera = buildExtends<ICameraProps & ICameraParams>(_);