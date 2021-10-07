import { Rectangle as BabylonRectangle} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Container'

export type IRectangleProps = {
    name?: string | undefined
}

export type IRectangleParams = {

}

function RectangleHOC<T>(EL: React.FC<T>) {
    return (props: T & IRectangleParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RectangleHOC(e));
}

function _(props: IRectangleProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonRectangle(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRectangle = buildExtends<IRectangleProps & IRectangleParams>(_); 