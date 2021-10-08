import { LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3, Mesh as BabylonMesh } from "@babylonjs/core";
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";

export type IDashedLinesProps = IComponentProps<BabylonMesh> & {
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

function DashedLinesHOC(EL: React.FC) {
    return (props: IDashedLinesParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DashedLinesHOC(e));
}

function _(props: IDashedLinesProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateDashedLines(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDashedLines = buildExtends<IDashedLinesProps & IDashedLinesParams>(_);