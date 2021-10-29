import { TransformNode, Vector3 } from "@babylonjs/core";
import React, { useEffect } from "react";
import { isAllPresent } from "../../../utils/lang";

export type ILayoutParams = {
    x?: number,
    y?: number,
    z?: number,
    rotation?: Vector3
}

export function LayoutHoc(EL: React.FC<ILayoutParams>) {
    return (props: ILayoutParams) => {
        const instance: TransformNode = (props as any).instance;
        const { x, y, z, rotation } = props;
        useEffect(() => {   
            isAllPresent(instance, x) && (instance.position.x = x);
        }, [instance, x]);
        useEffect(() => {   
            isAllPresent(instance, y) && (instance.position.y = y);
        }, [instance, y]);
        useEffect(() => {   
            isAllPresent(instance, z) && (instance.position.z = z);
        }, [instance, z]);
        useEffect(() => {   
            isAllPresent(instance, rotation) && (instance.rotation = rotation);
        }, [instance, rotation]);
        return <EL {...props}/>
    }
}