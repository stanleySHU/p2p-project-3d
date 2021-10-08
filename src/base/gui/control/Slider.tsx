import { Slider as BabylonSlider} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './BaseSlider'

export type ISliderProps = IComponentProps<BabylonSlider> & {
    name?: string
}

export type ISliderParams = {

}

function SliderHOC(EL: React.FC) {
    return (props: ISliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SliderHOC(e));
}

function _(props: ISliderProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonSlider(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSlider = buildExtends<ISliderProps & ISliderParams>(_); 