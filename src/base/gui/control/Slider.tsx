import { Slider as BabylonSlider } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IBaseSliderInitial, buildExtends as _buildExtends } from './BaseSlider';

export type ISliderInitial<T> = IBaseSliderInitial<T> & {}
export type ISliderProps = ISliderInitial<BabylonSlider>;

export function SliderHOC<T>(EL: React.FC<T>) {
    return (props: T & ISliderProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonSlider(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SliderHOC(e));
}

export const P2PSlider = buildExtends<ISliderProps>(ChildHOC(null));