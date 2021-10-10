import { StereoscopicFreeCamera as BabylonStereoscopicFreeCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './FreeCamera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IStereoscopicFreeCameraProps = IComponentProps<BabylonStereoscopicFreeCamera> & {
    name: string, 
    position: Vector3, 
    interaxialDistance: number, 
    isStereoscopicSideBySide: boolean,
    scene: BabylinScene
}

export type IStereoscopicFreeCameraParams = {

}

function StereoscopicFreeCameraHOC(EL: React.FC) {
    return (props: IStereoscopicFreeCameraParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StereoscopicFreeCameraHOC(e));
}

function _(props: IStereoscopicFreeCameraProps) {
    const { init, name, position, interaxialDistance, isStereoscopicSideBySide, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStereoscopicFreeCamera(name, position, interaxialDistance, isStereoscopicSideBySide, scene );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStereoscopicFreeCamera = buildExtends<IStereoscopicFreeCameraProps & IStereoscopicFreeCameraParams>(_);