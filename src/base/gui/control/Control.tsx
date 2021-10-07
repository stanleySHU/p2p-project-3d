import { Control as BabylonControl} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IControlProps = {
    name?: string | undefined
}

export type IControlParams = {

}

function ControlHOC<T>(EL: React.FC<T>) {
    return (props: T & IControlParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ControlHOC(e));
}

function _(props: IControlProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonControl(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PControl = buildExtends<IControlProps & IControlParams>(_); 