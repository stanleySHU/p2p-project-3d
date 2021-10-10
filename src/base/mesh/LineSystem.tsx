import { Color4, LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer, useLayoutEffect } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type ILineSystemProps = IComponentProps<BabylonMesh> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LineSystemHOC(e));
}

function _(props: ILineSystemProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateLineSystem(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLineSystem = buildExtends<ILineSystemProps & ILineSystemParams>(_);