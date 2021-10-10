import { MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useLayoutEffect, useReducer } from "react"
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
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateGround(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGround = buildExtends<IGroundProps & IGroundParams>(_);