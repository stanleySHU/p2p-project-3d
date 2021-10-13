import { ICreateCapsuleOptions, MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from "@babylonjs/core";
import { useLayoutEffect } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { MeshHOC } from "./Mesh";

export type ICapsuleProps = IComponentProps & {
    name: string, 
    options?: ICreateCapsuleOptions, 
    scene?: Nullable<BabylonScene>
}

export type ICapsuleParams = {

}

export function CapsuleHOC(EL: React.FC) {
    return (props: ICapsuleParams) => {
        return <EL {...props}/>
    }
}

function _(props: ICapsuleProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateCapsule(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCapsule = getEL<ICapsuleParams>(_, [
    CapsuleHOC,
    MeshHOC,
    ComponentHOC
]);