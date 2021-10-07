import { Color4, LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ILinesProps = {
    name: string, 
    options: {
        points: Vector3[];
        updatable?: boolean;
        instance?: Nullable<LinesMesh>;
        colors?: Color4[];
        useVertexAlpha?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ILinesParams = {

}

function LinesHOC<T>(EL: React.FC<T>) {
    return (props: T & ILinesProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LinesHOC(e));
}

function _(props: ILinesProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateLines(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PLines = buildExtends<ILinesProps & ILinesParams>(_);