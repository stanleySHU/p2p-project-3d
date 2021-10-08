import { Control as BabylonControl} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IControlProps = IComponentProps<BabylonControl> & {
    name?: string 
}

export type IControlParams = {

}

function ControlHOC(EL: React.FC) {
    return (props: IControlParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ControlHOC(e));
}

function _(props: IControlProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonControl(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PControl = buildExtends<IControlProps & IControlParams>(_); 