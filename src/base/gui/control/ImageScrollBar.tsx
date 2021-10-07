import { ImageScrollBar as BabylonImageScrollBar } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IBaseSliderInitial, buildExtends as _buildExtends } from './BaseSlider';

export type IImageScrollBarInitial<T> = IBaseSliderInitial<T> & {}
export type IImageScrollBarProps = IImageScrollBarInitial<BabylonImageScrollBar>;

export function ImageScrollBarHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageScrollBarProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonImageScrollBar(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageScrollBarHOC(e));
}

export const P2PImageScrollBar = buildExtends<IImageScrollBarProps>(ChildHOC(null));