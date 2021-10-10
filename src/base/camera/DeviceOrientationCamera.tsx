import { DeviceOrientationCamera as BabylonDeviceOrientationCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IDeviceOrientationCameraProps = IComponentProps<BabylonDeviceOrientationCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IDeviceOrientationCameraParams = {

}

function DeviceOrientationCameraHOC(EL: React.FC) {
    return (props: IDeviceOrientationCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DeviceOrientationCameraHOC(e));
}

function _(props: IDeviceOrientationCameraProps) {
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonDeviceOrientationCamera(name, position, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDeviceOrientationCamera = buildExtends<IDeviceOrientationCameraProps & IDeviceOrientationCameraParams>(_);