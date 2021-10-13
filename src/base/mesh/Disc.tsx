import { MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type IDiscProps = IComponentProps & {
    name: string, 
    options: {
        radius?: number;
        tessellation?: number;
        arc?: number;
        updatable?: boolean;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
    }, 
    scene?: Nullable<BabylonScene>
}

export type IDiscParams = {

}

function DiscHOC(EL: React.FC) {
    return (props: IDiscParams) => {
        return <EL {...props}/>
    }
}

function _(props: IDiscProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateDisc(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDisc = getEL<IDiscParams>(_, [
    DiscHOC,
    MeshHOC,
    ComponentHOC
]);