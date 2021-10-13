import { Image as BabylonImage} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Nullable } from '../../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IImageProps = IComponentProps & {
    name?: string,
    url?: Nullable<string>
}

export type IImageParams = {
    stretch?: number
}

function ImageHOC(EL: React.FC<IImageParams>) {
    return (props: IImageParams) => {
        const { instance } = props as any;
        useEffect(() => {
            if (instance) instance.stretch = props.stretch || BabylonImage.STRETCH_UNIFORM;
        }, [props.stretch, instance]);
        
        return <EL {...props}/>
    }
}

function _(props: IImageProps) {
    const { init, name, url } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImage(name, url);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImage = getEL<IComponentProps & IControlParams & IImageParams & IImageProps>(_, [
    ImageHOC,
    ControlHOC,
    ComponentHOC
])