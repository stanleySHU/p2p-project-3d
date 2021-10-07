import { BaseSlider as BabylonBaseSlider } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IBaseSliderInitial<T> = IControlInitial<T> & {}
export type IBaseSliderProps = IBaseSliderInitial<BabylonBaseSlider>;

export function BaseSliderHOC<T>(EL: React.FC<T>) {
    return (props: T & IBaseSliderProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonBaseSlider(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BaseSliderHOC(e));
}

export const P2PBaseSlider = buildExtends<IBaseSliderProps>(ChildHOC(null));