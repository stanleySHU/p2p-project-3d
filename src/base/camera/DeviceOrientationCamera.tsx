import { DeviceOrientationCamera as BabylonDeviceOrientationCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"

export type IDeviceOrientationCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IDeviceOrientationCameraParams = {

}

function DeviceOrientationCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IDeviceOrientationCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DeviceOrientationCameraHOC(e));
}

function _(props: IDeviceOrientationCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene } =  props;
    useEffect(() => {
        let obj = new BabylonDeviceOrientationCamera(name, position, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PDeviceOrientationCamera = buildExtends<IDeviceOrientationCameraProps & IDeviceOrientationCameraParams>(_);