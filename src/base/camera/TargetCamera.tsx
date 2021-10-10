import { TargetCamera as BabylonTargetCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends, ICameraParams } from './Camera';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type ITargetCameraProps = IComponentProps<BabylonTargetCamera> &{
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ITargetCameraParams = ICameraParams & {
    setTarget?: Vector3
}

function TargetCameraHOC(EL: React.FC<ITargetCameraParams>) {
    return (props: ITargetCameraParams) => {
        const { instance } = props; 
        useEffect(() => {
            instance?.setTarget(props.setTarget);
        }, [props.setTarget, instance])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TargetCameraHOC(e));
}

function _(props: ITargetCameraProps) {
    const { init, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonTargetCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTargetCamera = buildExtends<ITargetCameraProps & ITargetCameraParams>(_);