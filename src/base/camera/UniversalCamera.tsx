import { UniversalCamera as BabylonUniversalCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './TouchCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
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
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonUniversalCamera(name, position, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PUniversalCamera = buildExtends<IUniversalCameraProps & IUniversalCameraParams>(_);