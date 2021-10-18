import { TargetCamera as BabylonTargetCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { isAllPresent } from '../../utils/lang';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';
import { CameraHOC } from './Camera';

export type ITargetCameraProps = IComponentProps & {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ITargetCameraParams = {
    setTarget?: Vector3
}

export function TargetCameraHOC(EL: React.FC<ITargetCameraParams>) {
    return (props: ITargetCameraParams) => {
        const instance: BabylonTargetCamera = (props as any).instance;
        const { setTarget } = props;
        useEffect(() => {
            instance && props.setTarget && instance.setTarget(props.setTarget);
            isAllPresent(instance, setTarget) && (instance.setTarget(props.setTarget));
        }, [props.setTarget, instance])
        return <EL {...props}/>
    }
}

function _(props: ITargetCameraProps) {
    const { init, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonTargetCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTargetCamera = getEL<ITargetCameraParams>(_, [
    TargetCameraHOC,
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);