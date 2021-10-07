import { Image as BabylonImage } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { Nullable } from '../../../utils/customType';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IImageInitial<T> = IControlInitial<T> & {
    url?: Nullable<string>
}
export type IImageProps = IImageInitial<BabylonImage>;

export function ImageHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageProps) => {
        const { instance, name, url } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonImage(name, url);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageHOC(e));
}

export const P2PImage = buildExtends<IImageProps>(ChildHOC(null));