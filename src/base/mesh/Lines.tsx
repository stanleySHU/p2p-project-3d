import { Color4, LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type ILinesProps = IComponentProps & {
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

function _(props: ILinesProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateLines(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLines = getEL<ILinesParams>(_, [
    LinesHOC,
    MeshHOC,
    ComponentHOC
]);