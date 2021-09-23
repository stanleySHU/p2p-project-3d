import { ReactNode, useContext, useEffect, useRef, useState } from "react"
import { ArcRotateCamera, Vector3 } from '@babylonjs/core'
import { SceneContext } from "./Scene";

type IArcRotateCameraInitial = {
    name: string,
    alpha: number,
    beta: number,
    radius: number,
    target: Vector3,
    setActiveOnSceneIfNoneActive?: boolean,
    children?: ReactNode
}

export const P2PArcRotateCamera = (props: IArcRotateCameraInitial) => {
    const { scene } = useContext(SceneContext);
    const sceneRef = useRef(new ArcRotateCamera(props.name, props.alpha, props.beta, props.radius, props.target, scene!, props.setActiveOnSceneIfNoneActive));
    const [instance, setInstance] = useState<ArcRotateCamera>();

    useEffect(() => {

    }, []);

    return <>{props.children}</>;
}