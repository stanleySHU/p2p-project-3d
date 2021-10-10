import { ICreateCapsuleOptions, MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from "@babylonjs/core";
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useLayoutEffect, useReducer } from "react"
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
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateCapsule(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCapsule = buildExtends<ICapsuleProps & ICapsuleParams>(_);