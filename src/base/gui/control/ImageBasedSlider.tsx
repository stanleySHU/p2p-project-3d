import { ImageBasedSlider as BabylonImageBasedSlider } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IBaseSliderInitial, buildExtends as _buildExtends } from './BaseSlider';

export type IImageBasedSliderInitial<T> = IBaseSliderInitial<T> & {}
export type IImageBasedSliderProps = IImageBasedSliderInitial<BabylonImageBasedSlider>;

export function ImageBasedSliderHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageBasedSliderProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonImageBasedSlider(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageBasedSliderHOC(e));
}

export const P2PImageBasedSlider = buildExtends<IImageBasedSliderProps>(ChildHOC(null));