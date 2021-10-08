import { ICreateCapsuleOptions, MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from "@babylonjs/core";
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";

export type ICapsuleProps = IComponentProps<BabylonMesh> & {
    name: string, 
    options?: ICreateCapsuleOptions, 
    scene?: Nullable<BabylonScene>
}

export type ICapsuleParams = {

}

function CapsuleHOC(EL: React.FC) {
    return (props: ICapsuleParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CapsuleHOC(e));
}

function _(props: ICapsuleProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateCapsule(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCapsule = buildExtends<ICapsuleProps & ICapsuleParams>(_);