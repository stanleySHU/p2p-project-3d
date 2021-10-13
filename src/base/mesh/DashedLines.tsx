import { LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3, Mesh as BabylonMesh } from "@babylonjs/core";
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { MeshHOC } from "./Mesh";

export type IDashedLinesProps = IComponentProps & {
    name: string, 
    options: {
        points: Vector3[];
        dashSize?: number;
        gapSize?: number;
        dashNb?: number;
        updatable?: boolean;
        instance?: LinesMesh;
    }, scene?: Nullable<BabylonScene>
}

export type IDashedLinesParams = {

}

export function DashedLinesHOC(EL: React.FC) {
    return (props: IDashedLinesParams) => {
        return <EL {...props}/>
    }
}

function _(props: IDashedLinesProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateDashedLines(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDashedLines = getEL<IDashedLinesParams>(_, [
    DashedLinesHOC,
    MeshHOC,
    ComponentHOC
]);