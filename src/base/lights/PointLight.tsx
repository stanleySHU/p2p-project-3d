import { PointLight as BabylonPointLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './ShadowLight';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IPointLightProps = IComponentProps<BabylonPointLight> &  {
    name: string, 
    position: Vector3, 
    scene: BabylinScene
}

export type IPointLightParams = {

}

function PointLightHOC(EL: React.FC) {
    return (props: IPointLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PointLightHOC(e));
}

function _(props: IPointLightProps) {
    const { init, name, position, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPointLight (name, position, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPointLight = buildExtends<IPointLightProps & IPointLightParams>(_);