import { MeshBuilder, Scene as BabylonScene, Vector4 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ISphereProps = {
    name: string, 
    options: {
        segments?: number;
        diameter?: number;
        diameterX?: number;
        diameterY?: number;
        diameterZ?: number;
        arc?: number;
        slice?: number;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
        updatable?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ISphereParams = {

}

function SphereHOC<T>(EL: React.FC<T>) {
    return (props: T & ISphereProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SphereHOC(e));
}

function _(props: ISphereProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateSphere(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSphere = buildExtends<ISphereProps & ISphereParams>(_);