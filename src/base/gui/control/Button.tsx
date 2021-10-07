import { Button as BabylonButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Rectangle'

export type IButtonProps = {
    name?: string | undefined
}

export type IButtonParams = {

}

function ButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ButtonHOC(e));
}

function _(props: IButtonProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonButton(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PButton = buildExtends<IButtonProps & IButtonParams>(_); 