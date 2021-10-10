import { Control as BabylonControl} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IControlProps = IComponentProps<BabylonControl> & {
    name?: string 
}

export type IControlParams = IComponentProps<unknown> & {

}

function ControlHOC(EL: React.FC) {
    return (props: IControlParams) => {
        const { instance, parentInstance } = props;
        useEffect(() => {
            if (instance && parentInstance.addControl) {
                parentInstance.addControl(instance);
            }
        }, [instance]);
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ControlHOC(e));
}

function _(props: IControlProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonControl(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PControl = buildExtends<IControlProps & IControlParams>(_); 