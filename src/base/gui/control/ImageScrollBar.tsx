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
            console.log(`ImageScrollBar ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonImageScrollBar(name);
                console.log(`ImageScrollBar ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(ImageScrollBarHOC(e));
}

export const P2PImageScrollBar = buildExtends(ChildHOC(null));