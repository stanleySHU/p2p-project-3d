import { Color4, MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type IBoxProps = IComponentProps<BabylonMesh> & {
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

function BoxHOC(EL: React.FC) {
    return (props: IBoxParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BoxHOC(e));
}

function _(props: IBoxProps) {
    const { init,  name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateBox(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBox = buildExtends<IBoxProps & IBoxParams>(_);