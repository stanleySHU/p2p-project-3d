import { MeshBuilder, Scene as BabylonScene } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type IGroundProps = {
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

function GroundHOC<T>(EL: React.FC<T>) {
    return (props: T & IGroundProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GroundHOC(e));
}

function _(props: IGroundProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateGround(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PGround = buildExtends<IGroundProps & IGroundParams>(_);