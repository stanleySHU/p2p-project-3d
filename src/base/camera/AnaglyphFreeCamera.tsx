import { AnaglyphFreeCamera as BabylonAnaglyphFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IAnaglyphFreeCameraProps = IComponentProps<BabylonAnaglyphFreeCamera> & {
    name: string, 
    position: Vector3, 
    interaxialDistance: number, 
    scene: BabylinScene
}

export type IAnaglyphFreeCameraParams = {

}

function AnaglyphFreeCameraHOC(EL: React.FC) {
    return (props: IAnaglyphFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AnaglyphFreeCameraHOC(e));
}

function _(props: IAnaglyphFreeCameraProps) {
    const { init, name, position, interaxialDistance, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAnaglyphFreeCamera(name, position, interaxialDistance, scene );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAnaglyphFreeCamera = buildExtends<IAnaglyphFreeCameraProps & IAnaglyphFreeCameraParams>(_);