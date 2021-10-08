import { Color4, LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type ILinesProps = IComponentProps<BabylonMesh> & {
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

function LinesHOC(EL: React.FC) {
    return (props: ILinesParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LinesHOC(e));
}

function _(props: ILinesProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateLines(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLines = buildExtends<ILinesProps & ILinesParams>(_);