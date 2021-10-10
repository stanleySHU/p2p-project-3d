import { HemisphericLight as BabylonHemisphericLight, Scene as BabylinScene, Vector3 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Light';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { IComponentProps, P2PChildren } from '../Component';

export type IHemisphericLightProps = IComponentProps<BabylonHemisphericLight> &  {
    name: string, 
    direction: Vector3, 
    scene: BabylinScene
}

export type IHemisphericLightParams = {

}

function HemisphericLightHOC(EL: React.FC) {
    return (props: IHemisphericLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HemisphericLightHOC(e));
}

function _(props: IHemisphericLightProps) {
    const { init, name, direction, scene } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonHemisphericLight (name, direction, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PHemisphericLight = buildExtends<IHemisphericLightProps & IHemisphericLightParams>(_);