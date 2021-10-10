import { MeshBuilder, Plane, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type IPlaneProps = IComponentProps<BabylonMesh> & {
    name: string, 
    options: {
        size?: number;
        width?: number;
        height?: number;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
        updatable?: boolean;
        sourcePlane?: Plane;
    }, 
    scene?: Nullable<BabylonScene>
}

export type IPlaneParams = {

}

function PlaneHOC(EL: React.FC) {
    return (props: IPlaneParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaneHOC(e));
}

function _(props: IPlaneProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreatePlane(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlane = buildExtends<IPlaneProps & IPlaneParams>(_);