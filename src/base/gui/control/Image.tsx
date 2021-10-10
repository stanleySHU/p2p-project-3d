import { Image as BabylonImage} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IImageProps = IComponentProps<BabylonImage> & {
    name?: string 
}

export type IImageParams = IControlParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImage(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImage = buildExtends<IImageProps & IImageParams>(_); 