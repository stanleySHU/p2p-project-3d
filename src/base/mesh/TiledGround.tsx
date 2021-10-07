import { MeshBuilder, Scene as BabylonScene } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ITiledGroundProps = {
    name: string, 
    options: {
        xmin: number;
        zmin: number;
        xmax: number;
        zmax: number;
        subdivisions?: {
            w: number;
            h: number;
        };
        precision?: {
            w: number;
            h: number;
        };
        updatable?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ITiledGroundParams = {

}

function TiledGroundHOC<T>(EL: React.FC<T>) {
    return (props: T & ITiledGroundProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledGroundHOC(e));
}

function _(props: ITiledGroundProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateTiledGround(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTiledGround = buildExtends<ITiledGroundProps & ITiledGroundParams>(_);