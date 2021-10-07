import { UniversalCamera as BabylonUniversalCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TouchCamera';
import { useEffect, useReducer } from "react"

export type IUniversalCameraProps = {
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IUniversalCameraParams = {

}

function UniversalCameraHOC<T>(EL: React.FC<T>) {
    return (props: T & IUniversalCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(UniversalCameraHOC(e));
}

function _(props: IUniversalCameraProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, position, scene } =  props;
    useEffect(() => {
        let obj = new BabylonUniversalCamera(name, position, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PUniversalCamera = buildExtends<IUniversalCameraProps & IUniversalCameraParams>(_);