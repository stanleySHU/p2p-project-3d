import { ICreateCapsuleOptions, MeshBuilder, Scene as BabylonScene } from "@babylonjs/core";
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ICapsuleProps = {
    name: string, 
    options?: ICreateCapsuleOptions, 
    scene?: Nullable<BabylonScene>
}

export type ICapsuleParams = {

}

function CapsuleHOC<T>(EL: React.FC<T>) {
    return (props: T & ICapsuleParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CapsuleHOC(e));
}

function _(props: ICapsuleProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateCapsule(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCapsule = buildExtends<ICapsuleProps & ICapsuleParams>(_);