import { UniversalCamera as BabylonUniversalCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TouchCamera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IUniversalCameraProps = IComponentProps<BabylonUniversalCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IUniversalCameraParams = {

}

function UniversalCameraHOC(EL: React.FC) {
    return (props: IUniversalCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(UniversalCameraHOC(e));
}

function _(props: IUniversalCameraProps) {
    const { instance, name, position, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonUniversalCamera(name, position, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PUniversalCamera = buildExtends<IUniversalCameraProps & IUniversalCameraParams>(_);