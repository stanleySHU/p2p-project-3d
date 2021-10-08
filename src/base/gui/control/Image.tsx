import { Image as BabylonImage} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IImageProps = IComponentProps<BabylonImage> & {
    name?: string 
}

export type IImageParams = {

}

function ImageHOC(EL: React.FC) {
    return (props: IImageParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageHOC(e));
}

function _(props: IImageProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonImage(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImage = buildExtends<IImageProps & IImageParams>(_); 