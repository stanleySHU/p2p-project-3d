import { MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type IDiscProps = IComponentProps<BabylonMesh> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DiscHOC(e));
}

function _(props: IDiscProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateDisc(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDisc = buildExtends<IDiscProps & IDiscParams>(_);