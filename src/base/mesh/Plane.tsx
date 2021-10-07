import { MeshBuilder, Plane, Scene as BabylonScene, Vector4 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IPlaneProps = {
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

function PlaneHOC<T>(EL: React.FC<T>) {
    return (props: T & IPlaneProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaneHOC(e));
}

function _(props: IPlaneProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreatePlane(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPlane = buildExtends<IPlaneProps & IPlaneParams>(_);