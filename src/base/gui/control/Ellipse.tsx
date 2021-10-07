import { Ellipse as BabylonEllipse} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Container'

export type IEllipseProps = {
    name?: string | undefined
}

export type IEllipseParams = {

}

function EllipseHOC<T>(EL: React.FC<T>) {
    return (props: T & IEllipseParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EllipseHOC(e));
}

function _(props: IEllipseProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonEllipse(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PEllipse = buildExtends<IEllipseProps & IEllipseParams>(_); 