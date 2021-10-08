import { MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type ITiledGroundProps = IComponentProps<BabylonMesh> & {
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

function TiledGroundHOC(EL: React.FC) {
    return (props: ITiledGroundParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledGroundHOC(e));
}

function _(props: ITiledGroundProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateTiledGround(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTiledGround = buildExtends<ITiledGroundProps & ITiledGroundParams>(_);