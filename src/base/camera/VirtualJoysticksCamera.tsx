import { VirtualJoysticksCamera as BabylonVirtualJoysticksCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IVirtualJoysticksCameraProps = IComponentProps<BabylonVirtualJoysticksCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IVirtualJoysticksCameraParams = {

}

function VirtualJoysticksCameraHOC(EL: React.FC) {
    return (props: IVirtualJoysticksCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VirtualJoysticksCameraHOC(e));
}

function _(props: IVirtualJoysticksCameraProps) {
    const { instance, name, position, scene } =  props;
    useEffect(() => {
        instance!.current = new BabylonVirtualJoysticksCamera(name, position, scene );
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVirtualJoysticksCamera = buildExtends<IVirtualJoysticksCameraProps & IVirtualJoysticksCameraParams>(_);