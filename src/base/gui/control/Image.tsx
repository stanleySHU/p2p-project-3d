import { Image as BabylonImage} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Nullable } from '../../../utils/customType';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IImageProps = IComponentProps<BabylonImage> & {
    name?: string,
    url?: Nullable<string>
}

export type IImageParams<T> = IControlParams<T> & {
    stretch?: number
}

function ImageHOC(EL: React.FC) {
    return (props: IImageParams<BabylonImage>) => {
        const { instance } = props;
        useEffect(() => {
            if (instance) instance.stretch = props.stretch || BabylonImage.STRETCH_UNIFORM;
        }, [props.stretch, instance]);
        
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageHOC(e));
}

function _(props: IImageProps) {
    const { init, name, url } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImage(name, url);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImage = buildExtends<IImageProps & IImageParams<BabylonImage>>(_); 