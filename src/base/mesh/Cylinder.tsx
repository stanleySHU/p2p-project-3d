import { Color4, MeshBuilder, Scene as BabylonScene, Vector4 } from "@babylonjs/core";
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ICylinderProps = {
    name: string, 
    options: {
        height?: number;
        diameterTop?: number;
        diameterBottom?: number;
        diameter?: number;
        tessellation?: number;
        subdivisions?: number;
        arc?: number;
        faceColors?: Color4[];
        faceUV?: Vector4[];
        updatable?: boolean;
        hasRings?: boolean;
        enclose?: boolean;
        cap?: number;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
    }, scene?: Nullable<BabylonScene>
}

export type ICylinderParams = {

}

function CylinderHOC<T>(EL: React.FC<T>) {
    return (props: T & ICylinderParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CylinderHOC(e));
}

function _(props: ICylinderProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateCylinder(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCylinder = buildExtends<ICylinderProps & ICylinderParams>(_);


