import { BaseSlider as BabylonBaseSlider} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IBaseSliderProps = {
    name?: string | undefined
}

export type IBaseSliderParams = {

}

function BaseSliderHOC<T>(EL: React.FC<T>) {
    return (props: T & IBaseSliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BaseSliderHOC(e));
}

function _(props: IBaseSliderProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonBaseSlider(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PBaseSlider = buildExtends<IBaseSliderProps & IBaseSliderParams>(_); 