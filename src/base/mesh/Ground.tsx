import { MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type IGroundProps = IComponentProps<BabylonMesh> & {
    name: string, 
    options: {
        width?: number;
        height?: number;
        subdivisions?: number;
        subdivisionsX?: number;
        subdivisionsY?: number;
        updatable?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type IGroundParams = {

}

function GroundHOC(EL: React.FC) {
    return (props: IGroundParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GroundHOC(e));
}

function _(props: IGroundProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateGround(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGround = buildExtends<IGroundProps & IGroundParams>(_);