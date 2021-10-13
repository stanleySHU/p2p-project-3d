import { MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type ISphereProps = IComponentProps & {
    name: string, 
    options: {
        segments?: number;
        diameter?: number;
        diameterX?: number;
        diameterY?: number;
        diameterZ?: number;
        arc?: number;
        slice?: number;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
        updatable?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ISphereParams = {

}

function SphereHOC(EL: React.FC) {
    return (props: ISphereParams) => {
        return <EL {...props}/>
    }
}

function _(props: ISphereProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateSphere(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSphere = getEL<ISphereParams>(_, [
    SphereHOC,
    MeshHOC,
    ComponentHOC
]);