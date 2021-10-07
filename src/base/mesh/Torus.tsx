import { MeshBuilder, Scene as BabylonScene, Vector4 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ITorusProps = {
    name: string, 
    options: {
        diameter?: number;
        thickness?: number;
        tessellation?: number;
        updatable?: boolean;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ITorusParams = {

}

function TorusHOC<T>(EL: React.FC<T>) {
    return (props: T & ITorusProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TorusHOC(e));
}

function _(props: ITorusProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateTorus(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTorus = buildExtends<ITorusProps & ITorusParams>(_);