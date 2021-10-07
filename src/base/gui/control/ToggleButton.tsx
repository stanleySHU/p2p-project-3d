import { ToggleButton as BabylonToggleButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Rectangle'

export type IToggleButtonProps = {
    name?: string | undefined
}

export type IToggleButtonParams = {

}

function ToggleButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IToggleButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ToggleButtonHOC(e));
}

function _(props: IToggleButtonProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonToggleButton(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PToggleButton = buildExtends<IToggleButtonProps & IToggleButtonParams>(_); 