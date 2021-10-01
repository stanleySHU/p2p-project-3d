import React, { useRef } from "react";
import { IComponentProps, buildExtends as _buildExtends } from "../Component";

export type IThinTextureInitial<T> = IComponentProps<T> &  {}

function ThinTextureHOCM<T>(EL: React.FC<T>) {
    return (props: T & IThinTextureInitial<T>) => {
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ThinTextureHOCM(e));
}

export type ThinTextureProps = {}