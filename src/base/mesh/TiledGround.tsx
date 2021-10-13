import { MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type ITiledGroundProps = IComponentProps & {
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

function _(props: ITiledGroundProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateTiledGround(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTiledGround = getEL<ITiledGroundParams>(_, [
    TiledGroundHOC,
    MeshHOC,
    ComponentHOC
])