import { Color4, MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from "@babylonjs/core";
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";

export type ICylinderProps = IComponentProps<BabylonMesh> & {
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

function CylinderHOC(EL: React.FC) {
    return (props: ICylinderParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CylinderHOC(e));
}

function _(props: ICylinderProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateCylinder(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCylinder = buildExtends<ICylinderProps & ICylinderParams>(_);


