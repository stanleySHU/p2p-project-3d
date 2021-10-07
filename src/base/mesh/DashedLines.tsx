import { LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3 } from "@babylonjs/core";
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IDashedLinesProps = {
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

function DashedLinesHOC<T>(EL: React.FC<T>) {
    return (props: T & IDashedLinesProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DashedLinesHOC(e));
}

function _(props: IDashedLinesProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateDashedLines(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PDashedLines = buildExtends<IDashedLinesProps & IDashedLinesParams>(_);