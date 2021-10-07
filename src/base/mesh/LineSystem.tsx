import { Color4, LinesMesh, MeshBuilder, Scene as BabylonScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ILineSystemProps = {
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

function LineSystemHOC<T>(EL: React.FC<T>) {
    return (props: T & ILineSystemProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LineSystemHOC(e));
}

function _(props: ILineSystemProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateLineSystem(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PLineSystem = buildExtends<ILineSystemProps & ILineSystemParams>(_);