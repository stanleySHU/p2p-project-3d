import { Slider as BabylonSlider} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './BaseSlider'

export type ISliderProps = {
    name?: string | undefined
}

export type ISliderParams = {

}

function SliderHOC<T>(EL: React.FC<T>) {
    return (props: T & ISliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SliderHOC(e));
}

function _(props: ISliderProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonSlider(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSlider = buildExtends<ISliderProps & ISliderParams>(_); 