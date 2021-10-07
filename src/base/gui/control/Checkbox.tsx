import { Checkbox as BabylonCheckbox} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type ICheckboxProps = {
    name?: string | undefined
}

export type ICheckboxParams = {

}

function CheckboxHOC<T>(EL: React.FC<T>) {
    return (props: T & ICheckboxParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CheckboxHOC(e));
}

function _(props: ICheckboxProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonCheckbox(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCheckbox = buildExtends<ICheckboxProps & ICheckboxParams>(_); 