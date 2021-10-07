import { ImageBasedSlider as BabylonImageBasedSlider} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './BaseSlider'

export type IImageBasedSliderProps = {
    name?: string | undefined
}

export type IImageBasedSliderParams = {

}

function ImageBasedSliderHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageBasedSliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageBasedSliderHOC(e));
}

function _(props: IImageBasedSliderProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonImageBasedSlider(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PImageBasedSlider = buildExtends<IImageBasedSliderProps & IImageBasedSliderParams>(_); 