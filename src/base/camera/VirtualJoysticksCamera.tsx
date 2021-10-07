import { VirtualJoysticksCamera as BabylonVirtualJoysticksCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useReducer } from "react"

export type IVirtualJoysticksCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IVirtualJoysticksCameraParams = {

}

function VirtualJoysticksCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IVirtualJoysticksCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VirtualJoysticksCameraHOC(e));
}

function _(props: IVirtualJoysticksCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene } =  props;
    useEffect(() => {
        let obj = new BabylonVirtualJoysticksCamera(name, position, scene );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PVirtualJoysticksCamera = buildExtends<IVirtualJoysticksCameraProps & IVirtualJoysticksCameraParams>(_);