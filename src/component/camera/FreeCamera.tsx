import React, { useContext, useEffect } from "react";
import { SceneContext } from "../Scene";
import { FreeCamera as BabylonFreeCamera} from '@babylonjs/core';
import { ITargetCameraInitial } from "./TargetCamera";
import { Nullable } from "../../utils/customType";

export type IFreeCameraInitial<T> = {
    
} & ITargetCameraInitial<T>;
export type IFreeCameraProps = IFreeCameraInitial<BabylonFreeCamera>;


export const FreeCameraHOC = (EL: Nullable<React.FC<IFreeCameraProps>>) => {
    return (props: IFreeCameraProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonFreeCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log('FreeCamera created');
            }
        }, []);

        return EL && <EL {...props}/>
    };  
};

// export const FreeCamera = (props: IFreeCameraInitial) => {
//     const { scene } = useContext(SceneContext);
//     const instanceRef = useRef(new BabylonFreeCamera(props.name, props.position, scene!, props.setActiveOnSceneIfNoneActive));
//     instanceRef.current.attachControl(scene?.getEngine().getRenderingCanvas());
//     useEffect(() => {
        
//     });
//     return <>{props.children}</>;
// }