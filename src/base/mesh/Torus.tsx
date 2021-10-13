import { MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type ITorusProps = IComponentProps & {
    name: string, 
    options: {
        diameter?: number;
        thickness?: number;
        tessellation?: number;
        updatable?: boolean;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ITorusParams = {

}

function TorusHOC(EL: React.FC) {
    return (props: ITorusParams) => {
        return <EL {...props}/>
    }
}

function _(props: ITorusProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateTorus(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTorus = getEL<ITorusParams>(_, [
    TorusHOC,
    MeshHOC,
    ComponentHOC
]);