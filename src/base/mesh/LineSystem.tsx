import { Color4, LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3, Mesh as BabylonMesh } from '@babylonjs/core';
import { MeshHOC } from './Mesh';
import { useEffect, useReducer, useLayoutEffect } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';

export type ILineSystemProps = IComponentProps & {
    name: string, 
    options: {
        lines: Vector3[][];
        updatable?: boolean;
        instance?: Nullable<LinesMesh>;
        colors?: Nullable<Color4[][]>;
        useVertexAlpha?: boolean;
    }, 
    scene: Nullable<BabylonScene>
}

export type ILineSystemParams = {

}

function LineSystemHOC(EL: React.FC) {
    return (props: ILineSystemParams) => {
        return <EL {...props}/>
    }
}

function _(props: ILineSystemProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateLineSystem(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLineSystem = getEL<ILineSystemParams>(_, [
    LineSystemHOC,
    MeshHOC,
    ComponentHOC
]);