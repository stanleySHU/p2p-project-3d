import { Color4, MeshBuilder, Scene as BabylonScene, Vector4 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IBoxProps = {
    name: string, 
    options: {
        size?: number;
        width?: number;
        height?: number;
        depth?: number;
        faceUV?: Vector4[];
        faceColors?: Color4[];
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
        wrap?: boolean;
        topBaseAt?: number;
        bottomBaseAt?: number;
        updatable?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type IBoxParams = {

}

function BoxHOC<T>(EL: React.FC<T>) {
    return (props: T & IBoxParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BoxHOC(e));
}

function _(props: IBoxProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateBox(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PBox = buildExtends<IBoxProps & IBoxParams>(_);