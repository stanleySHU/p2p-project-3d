import { Camera as BabylonCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { isAllPresent } from '../../utils/lang';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { NodeHOC } from '../node/Node';

export type ICameraProps = IComponentProps & {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ICameraParams = {
    attachControl?: [any, boolean]
}

export function CameraHOC(EL: React.FC<ICameraParams>) {
    return (props: ICameraParams) => {
        const instance: BabylonCamera = (props as any).instance;
        const { attachControl } = props;
        useEffect(() => {
            isAllPresent(attachControl, instance) && (instance.attachControl(...props.attachControl));
        }, [props.attachControl, instance])
        return <EL {...props}/>
    }
}


function _(props: ICameraProps) {
    const { init, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCamera = getEL<ICameraParams>(_, [
    CameraHOC,
    NodeHOC,
    ComponentHOC
]);