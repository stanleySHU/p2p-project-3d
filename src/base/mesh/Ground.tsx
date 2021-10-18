import { MeshBuilder, Scene as BabylonScene, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type IGroundProps = IComponentProps & {
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

function _(props: IGroundProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateGround(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGround = getEL<IGroundParams & IGroundProps>(_, [
    GroundHOC,
    MeshHOC,
    ComponentHOC
])