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
            console.log(`ScrollBar ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonScrollBar(name);
                console.log(`ScrollBar ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(ScrollBarHOC(e));
}

export const P2PScrollBar = buildExtends(ChildHOC(null));