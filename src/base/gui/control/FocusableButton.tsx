import { FocusableButton as BabylonFocusableButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Button'

export type IFocusableButtonProps = {
    name?: string | undefined
}

export type IFocusableButtonParams = {

}

function FocusableButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IFocusableButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FocusableButtonHOC(e));
}

function _(props: IFocusableButtonProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonFocusableButton(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PFocusableButton = buildExtends<IFocusableButtonProps & IFocusableButtonParams>(_); 