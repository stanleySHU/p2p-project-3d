import { ScrollBar as BabylonScrollBar } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IBaseSliderInitial, buildExtends as _buildExtends } from './BaseSlider';

export type IScrollBarInitial<T> = IBaseSliderInitial<T> & {}
export type IScrollBarProps = IScrollBarInitial<BabylonScrollBar>;

export function ScrollBarHOC<T>(EL: React.FC<T>) {
    return (props: T & IScrollBarProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonScrollBar(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ScrollBarHOC(e));
}

export const P2PScrollBar = buildExtends<IScrollBarProps>(ChildHOC(null));