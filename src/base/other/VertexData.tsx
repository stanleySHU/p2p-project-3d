import { FloatArray, IndicesArray, VertexData as BabylonVertexData, GroundBuilder } from "@babylonjs/core"
import React, { useLayoutEffect } from "react"
import { Nullable } from "../../utils/customType"
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component"

export type IVertexDataProps = IComponentProps & {
    options: {
        positions: FloatArray,
        indices: Nullable<IndicesArray>,
        normals: FloatArray,
        unv: FloatArray
    }
}

export type IVertexDataParams = {

}

function VertexDataHOC(EL: React.FC<IVertexDataProps>) {
    return (props: IVertexDataProps) => {
        const instance: BabylonVertexData = (props as any).instance
        return <EL {...props}/>
    }
}

function _(props: IVertexDataProps) {
    const { init, parentInstance, options } = props;
    useLayoutEffect(() => {
        let obj = new BabylonVertexData();
        init!(obj);
        obj.positions = options.positions;
        obj.indices= options.indices;
        obj.normals = options.normals;
        obj.uvs = options.unv;
        obj.applyToMesh(parentInstance);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVertexData = getEL<IVertexDataParams & IVertexDataProps>(_, [
    VertexDataHOC,
    ComponentHOC
]);