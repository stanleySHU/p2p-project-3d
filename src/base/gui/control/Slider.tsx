import { Slider as BabylonSlider} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IBaseSliderParams } from './BaseSlider'

export type ISliderProps = IComponentProps<BabylonSlider> & {
    name?: string
}

export type ISliderParams = IBaseSliderParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonSlider(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSlider = buildExtends<ISliderProps & ISliderParams>(_); 