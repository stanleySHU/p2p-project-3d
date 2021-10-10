import { Camera as BabylonCamera, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from '../node/Node';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type ICameraProps = IComponentProps<BabylonCamera> & {
    name: string, 
    position: Vector3, 
    scene: BabylinScene, 
    setActiveOnSceneIfNoneActive?: boolean
}

export type ICameraParams = IComponentProps<any> & {
    attachControl?: [any, boolean]
}

function CameraHOC(EL: React.FC<ICameraParams>) {
    return (props: ICameraParams) => {
        const { instance } = props;
        useEffect(() => {
            instance?.attachControl(...props.attachControl!);
        }, [props.attachControl, instance])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CameraHOC(e));
}

function _(props: ICameraProps) {
    const { init, name, position, scene, setActiveOnSceneIfNoneActive } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCamera(name, position, scene, setActiveOnSceneIfNoneActive);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCamera = buildExtends<ICameraProps & ICameraParams>(_);