import { RadioButton as BabylonRadioButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IRadioButtonProps = {
    name?: string | undefined
}

export type IRadioButtonParams = {

}

function RadioButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IRadioButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RadioButtonHOC(e));
}

function _(props: IRadioButtonProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonRadioButton(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRadioButton = buildExtends<IRadioButtonProps & IRadioButtonParams>(_); 