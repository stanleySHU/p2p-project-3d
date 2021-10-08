import { ImageBasedSlider as BabylonImageBasedSlider} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './BaseSlider'

export type IImageBasedSliderProps = IComponentProps<BabylonImageBasedSlider> & {
    name?: string
}

export type IImageBasedSliderParams = {

}

function ImageBasedSliderHOC(EL: React.FC) {
    return (props: IImageBasedSliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageBasedSliderHOC(e));
}

function _(props: IImageBasedSliderProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonImageBasedSlider(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImageBasedSlider = buildExtends<IImageBasedSliderProps & IImageBasedSliderParams>(_); 