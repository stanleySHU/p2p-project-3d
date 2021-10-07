import { MeshBuilder, Scene as BabylonScene, Vector4 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IDiscProps = {
    name: string, 
    options: {
        radius?: number;
        tessellation?: number;
        arc?: number;
        updatable?: boolean;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
    }, 
    scene?: Nullable<BabylonScene>
}

export type IDiscParams = {

}

function DiscHOC<T>(EL: React.FC<T>) {
    return (props: T & IDiscProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DiscHOC(e));
}

function _(props: IDiscProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateDisc(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PDisc = buildExtends<IDiscProps & IDiscParams>(_);